import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Socket } from "socket.io-client";

// Константы событий (можно вынести в отдельный файл)
export const SOCKET_EVENTS = {
  CHAT: {
    INIT: "chat:init",
    NEW: "chat:new",
    JOINED: "chat:joined",
    UPDATED: "chat:updated",
    CLOSED: "chat:closed",
    CLOSE: "chat:close",
    MESSAGE: {
      SEND: "chat:message:send",
      NEW: "chat:message:new",
      TYPING_START: "chat:typing:start",
      TYPING_STOP: "chat:typing:stop",
    },
  },
  OPERATOR: {
    JOIN_CHAT: "operator:join-chat",
  },
};

/**
 * Хук для работы с Socket.IO
 * @param {string} userId - ID пользователя
 * @param {string} role - Роль: 'client' или 'operator'
 * @param {string} serverUrl - URL сервера (по умолчанию localhost:3000)
 * @returns {object} { socket, isConnected, chatId, SOCKET_EVENTS }
 */
export function useSocket(
  userId: string,
  role: string,
  serverUrl = "http://localhost:3000"
) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!userId || !role) return;

    // Подключаемся к серверу
    const newSocket = io(serverUrl, {
      auth: {
        userId,
        role,
      },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    socketRef.current = newSocket;
    setSocket(newSocket);

    newSocket.on("connect", () => {
      setIsConnected(true);
      console.log("Socket подключен");
    });

    newSocket.on("disconnect", () => {
      setIsConnected(false);
      console.log("Socket отключен");
    });

    newSocket.on("connect_error", (error) => {
      console.error("Ошибка подключения:", error);
      setIsConnected(false);
    });

    // Клиент: получаем chatId при инициализации
    if (role === "client") {
      newSocket.on(SOCKET_EVENTS.CHAT.INIT, (data) => {
        setChatId(data.chatId);
        console.log("Чат создан:", data.chatId);
      });
    }

    // Очистка при размонтировании
    return () => {
      newSocket.close();
      socketRef.current = null;
      setSocket(null);
      setIsConnected(false);
      setChatId(null);
    };
  }, [userId, role, serverUrl]);

  return {
    socket,
    isConnected,
    chatId,
    SOCKET_EVENTS,
  };
}
