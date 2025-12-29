import { useState, useEffect, useRef } from "react";
import { useSocket } from "../../hooks/useSocket";
import styles from "./ClientChat.module.scss";
import closeIcon from "@shared/assets/images/closeIcon.svg";
interface ClientChatProps {
  userId: string;
}

interface Message {
  sender: "server" | "client" | "operator";
  text: string;
  createdAt: string | Date;
  isSaved: boolean;
}

interface TypingData {
  role: "client" | "operator";
}

/**
 * Компонент чата для клиента
 * @param {string} userId - ID пользователя
 */
export function ClientChat({ userId }: ClientChatProps) {
  const { socket, isConnected, chatId, SOCKET_EVENTS } = useSocket(
    userId,
    "client"
  );

  // Ключи для localStorage
  const MESSAGES_STORAGE_KEY = `chat_messages_${userId}`;
  const INPUT_STORAGE_KEY = `chat_input_${userId}`;

  // Загрузка сохраненных данных из localStorage при монтировании
  const loadSavedMessages = (): Message[] => {
    try {
      const saved = localStorage.getItem(MESSAGES_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Ошибка при загрузке сообщений из localStorage:", error);
    }
    return [];
  };

  const loadSavedInput = (): string => {
    try {
      const saved = localStorage.getItem(INPUT_STORAGE_KEY);
      return saved || "";
    } catch (error) {
      console.error("Ошибка при загрузке текста из localStorage:", error);
      return "";
    }
  };

  const [messages, setMessages] = useState<Message[]>(loadSavedMessages);
  const [inputText, setInputText] = useState(loadSavedInput);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  // Прокрутка к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Сохранение сообщений в localStorage при их изменении
  useEffect(() => {
    try {
      localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Ошибка при сохранении сообщений в localStorage:", error);
    }
  }, [messages, MESSAGES_STORAGE_KEY]);
  // Сохранение текста ввода в localStorage при его изменении
  useEffect(() => {
    try {
      localStorage.setItem(INPUT_STORAGE_KEY, inputText);
    } catch (error) {
      console.error("Ошибка при сохранении текста в localStorage:", error);
    }
  }, [inputText, INPUT_STORAGE_KEY]);

  // Подписываемся на события
  useEffect(() => {
    if (!socket) return;

    // Получение новых сообщений
    const handleNewMessage = (message: Message) => {
      setMessages((prev) => {
        // Проверяем, есть ли уже такое приветственное сообщение
        const isWelcomeMessage =
          message.sender === "server" &&
          (message.text.includes("Привет") ||
            message.text.includes("Ожидаем оператора"));

        if (isWelcomeMessage) {
          // Проверяем, есть ли уже такое сообщение в сохраненных
          const hasWelcomeMessage = prev.some(
            (msg) =>
              msg.sender === "server" &&
              (msg.text.includes("Привет") ||
                msg.text.includes("Ожидаем оператора"))
          );

          // Если приветственное сообщение уже есть, не добавляем дубликат
          if (hasWelcomeMessage) {
            return prev;
          }
        }

        // Проверяем на дубликаты по тексту и времени (с небольшой погрешностью)
        const isDuplicate = prev.some(
          (msg) =>
            msg.text === message.text &&
            msg.sender === message.sender &&
            Math.abs(
              new Date(msg.createdAt).getTime() -
                new Date(message.createdAt).getTime()
            ) < 1000
        );

        // Если это дубликат, не добавляем
        if (isDuplicate) {
          return prev;
        }

        return [...prev, message];
      });
    };

    // Индикатор набора текста
    const handleTypingStart = (data: TypingData) => {
      if (data.role === "operator") {
        setIsTyping(true);
      }
    };

    const handleTypingStop = (data: TypingData) => {
      if (data.role === "operator") {
        setIsTyping(false);
      }
    };

    socket.on(SOCKET_EVENTS.CHAT.MESSAGE.NEW, handleNewMessage);
    socket.on(SOCKET_EVENTS.CHAT.MESSAGE.TYPING_START, handleTypingStart);
    socket.on(SOCKET_EVENTS.CHAT.MESSAGE.TYPING_STOP, handleTypingStop);

    return () => {
      socket.off(SOCKET_EVENTS.CHAT.MESSAGE.NEW, handleNewMessage);
      socket.off(SOCKET_EVENTS.CHAT.MESSAGE.TYPING_START, handleTypingStart);
      socket.off(SOCKET_EVENTS.CHAT.MESSAGE.TYPING_STOP, handleTypingStop);
    };
  }, [socket, SOCKET_EVENTS]);

  // Отправка сообщения
  const sendMessage = () => {
    if (!socket || !chatId || !inputText.trim()) return;

    socket.emit(SOCKET_EVENTS.CHAT.MESSAGE.SEND, {
      chatId,
      text: inputText.trim(),
    });

    setInputText("");
    // Очищаем сохраненный текст в localStorage
    try {
      localStorage.removeItem(INPUT_STORAGE_KEY);
    } catch (error) {
      console.error("Ошибка при очистке localStorage:", error);
    }
    stopTyping();
  };

  // Обработка набора текста
  const handleTyping = () => {
    if (!socket || !chatId) return;

    socket.emit(SOCKET_EVENTS.CHAT.MESSAGE.TYPING_START, { chatId });

    // Останавливаем индикатор через 1 секунду бездействия
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      stopTyping();
    }, 1000);
  };

  const stopTyping = () => {
    if (!socket || !chatId) return;
    socket.emit(SOCKET_EVENTS.CHAT.MESSAGE.TYPING_STOP, { chatId });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (!isConnected) {
    return (
      <div className={styles.chatContainer}>
        <div className="chat-status">Подключение к серверу...</div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.chatContainer} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <div className={styles.chatHeader}>
        <h3>Чат поддержки</h3>
        <div
          className={`${styles.statusIndicator} ${
            isConnected ? styles.online : styles.offline
          }`}
        >
          {isConnected ? "●" : "○"}
        </div>
        {isOpen && (
          <button className={styles.closeButton} onClick={handleClose}>
            <img src={closeIcon} alt="close" />
          </button>
        )}
        {!isOpen && (
          <button className={styles.openButton} onClick={handleOpen}>
            <p>Открыть чат</p>
          </button>
        )}
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div key={index} className={`message message-${message.sender}`}>
            <div className={styles.messageSender}>
              {message.sender === "server"
                ? "Система"
                : message.sender === "client"
                ? "Вы"
                : "Оператор"}
            </div>
            <div className={styles.messageText}>{message.text}</div>
            <div className={styles.messageTime}>
              {new Date(message.createdAt).toLocaleTimeString()}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className={styles.typingIndicator}>
            <span>Оператор печатает...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            handleTyping();
          }}
          onKeyPress={handleKeyPress}
          placeholder="Введите сообщение..."
          disabled={!chatId}
        />
        <button
          onClick={() => {
            sendMessage();
          }}
          disabled={!chatId || !inputText.trim()}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
