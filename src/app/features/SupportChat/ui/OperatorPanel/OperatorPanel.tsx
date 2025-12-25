import { useState, useEffect, useRef } from "react";
import { useSocket } from "../../hooks/useSocket";
import styles from "./OperatorPanel.module.scss";

interface OperatorPanelProps {
  userId: string;
}

interface Chat {
  chatId: string;
  clientId: string;
  status: string;
  operatorId?: string;
}

interface Message {
  sender: "server" | "client" | "operator";
  text: string;
  createdAt: string | Date;
  chatId?: string;
}

interface TypingData {
  role: "client" | "operator";
}

/**
 * Компонент панели оператора
 * @param {string} userId - ID оператора
 */
export function OperatorPanel({ userId }: OperatorPanelProps) {
  const { socket, isConnected, SOCKET_EVENTS } = useSocket(userId, "operator");
  const [waitingChats, setWaitingChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Подписываемся на события оператора
  useEffect(() => {
    if (!socket) return;

    // Новый чат появился
    const handleNewChat = (data: Chat) => {
      setWaitingChats((prev) => [...prev, data]);
    };

    // Оператор подключился к чату
    const handleChatJoined = (data: Chat) => {
      setWaitingChats((prev) => prev.filter((c) => c.chatId !== data.chatId));
      if (data.operatorId === userId) {
        setActiveChatId(data.chatId);
      }
    };

    // Чат обновлен
    const handleChatUpdated = (data: Chat) => {
      setWaitingChats((prev) =>
        prev.map((chat) =>
          chat.chatId === data.chatId ? { ...chat, status: data.status } : chat
        )
      );
    };

    // Чат закрыт
    const handleChatClosed = (data: Chat) => {
      setWaitingChats((prev) => prev.filter((c) => c.chatId !== data.chatId));
      if (activeChatId === data.chatId) {
        setActiveChatId(null);
        setMessages([]);
      }
    };

    // Новое сообщение
    const handleNewMessage = (message: Message) => {
      if (message.chatId === activeChatId) {
        setMessages((prev) => [...prev, message]);
      }
    };

    socket.on(SOCKET_EVENTS.CHAT.NEW, handleNewChat);
    socket.on(SOCKET_EVENTS.CHAT.JOINED, handleChatJoined);
    socket.on(SOCKET_EVENTS.CHAT.UPDATED, handleChatUpdated);
    socket.on(SOCKET_EVENTS.CHAT.CLOSED, handleChatClosed);
    socket.on(SOCKET_EVENTS.CHAT.MESSAGE.NEW, handleNewMessage);

    return () => {
      socket.off(SOCKET_EVENTS.CHAT.NEW, handleNewChat);
      socket.off(SOCKET_EVENTS.CHAT.JOINED, handleChatJoined);
      socket.off(SOCKET_EVENTS.CHAT.UPDATED, handleChatUpdated);
      socket.off(SOCKET_EVENTS.CHAT.CLOSED, handleChatClosed);
      socket.off(SOCKET_EVENTS.CHAT.MESSAGE.NEW, handleNewMessage);
    };
  }, [socket, SOCKET_EVENTS, userId, activeChatId]);

  // Прокрутка к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Подключение к чату
  const joinChat = (chatIdToJoin: string) => {
    if (!socket || activeChatId) return;
    socket.emit(SOCKET_EVENTS.OPERATOR.JOIN_CHAT, { chatId: chatIdToJoin });
    setActiveChatId(chatIdToJoin);
    setMessages([]);
  };

  // Закрытие чата
  const closeChat = () => {
    if (!socket || !activeChatId) return;
    socket.emit(SOCKET_EVENTS.CHAT.CLOSE, { chatId: activeChatId });
    setActiveChatId(null);
    setMessages([]);
  };

  // Отправка сообщения
  const sendMessage = () => {
    if (!socket || !activeChatId || !inputText.trim()) return;

    socket.emit(SOCKET_EVENTS.CHAT.MESSAGE.SEND, {
      chatId: activeChatId,
      text: inputText.trim(),
    });

    setInputText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isConnected) {
    return <div className={styles.operatorPanel}>Подключение к серверу...</div>;
  }

  return (
    <div className={styles.operatorPanel}>
      <div className={styles.operatorHeader}>
        <h2>Панель оператора</h2>
        <div
          className={`${styles.status} ${
            isConnected ? styles.online : styles.offline
          }`}
        >
          {isConnected ? "Онлайн" : "Офлайн"}
        </div>
      </div>

      <div className={styles.operatorContent}>
        {/* Список ожидающих чатов */}
        <div className={styles.waitingChats}>
          <h3>Ожидающие чаты ({waitingChats.length})</h3>
          {waitingChats.length === 0 ? (
            <p>Нет ожидающих чатов</p>
          ) : (
            <div className={styles.chatsList}>
              {waitingChats.map((chat) => (
                <div key={chat.chatId} className={styles.chatItem}>
                  <div>
                    <strong>Чат:</strong> {chat.chatId}
                    <br />
                    <small>Клиент: {chat.clientId}</small>
                    <br />
                    <span
                      className={`${styles.statusBadge} ${
                        styles[`status${chat.status}`] || ""
                      }`}
                    >
                      {chat.status}
                    </span>
                  </div>
                  <button
                    onClick={() => joinChat(chat.chatId)}
                    disabled={!!activeChatId}
                  >
                    Подключиться
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Активный чат */}
        {activeChatId && (
          <div className={styles.activeChat}>
            <div className={styles.chatHeader}>
              <h3>Чат: {activeChatId}</h3>
              <button onClick={closeChat}>Закрыть чат</button>
            </div>

            <div className={styles.messagesContainer}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message message-${message.sender}`}
                >
                  <div className={styles.messageSender}>
                    {message.sender === "server"
                      ? "Система"
                      : message.sender === "operator"
                      ? "Вы"
                      : "Клиент"}
                  </div>
                  <div className={styles.messageText}>{message.text}</div>
                  <div className={styles.messageTime}>
                    {new Date(message.createdAt).toLocaleTimeString()}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Введите сообщение..."
              />
              <button onClick={sendMessage} disabled={!inputText.trim()}>
                Отправить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
