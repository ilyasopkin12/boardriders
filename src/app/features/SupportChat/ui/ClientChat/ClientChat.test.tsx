import { render, screen } from "@testing-library/react";
import { ClientChat } from "./ClientChat";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

const mockEmit = vi.fn();
const mockOn = vi.fn();
const mockOff = vi.fn();

vi.mock("../../hooks/useSocket", () => ({
  useSocket: () => ({
    socket: {
      emit: mockEmit,
      on: mockOn,
      off: mockOff,
    },
    isConnected: true,
    chatId: "1",
    SOCKET_EVENTS: {
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
    },
  }),
}));

describe("ClientChat", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Очищаем localStorage перед каждым тестом
    localStorage.clear();
  });
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });
  it("should render", () => {
    render(<ClientChat userId="1" />);
    expect(screen.getByText("Чат поддержки")).toBeInTheDocument();
  });
  it(" user should type", async () => {
    render(<ClientChat userId="1" />);
    const input = screen.getByPlaceholderText("Введите сообщение...");
    await userEvent.type(input, "test");
    expect(input).toHaveValue("test");
  });
  it(" user should send message", async () => {
    render(<ClientChat userId="1" />);
    const input = screen.getByPlaceholderText("Введите сообщение...");
    const sendButton = screen.getByText("Отправить");

    await userEvent.type(input, "test message");
    await userEvent.click(sendButton);

    // Проверяем, что был вызов с chat:message:send
    expect(mockEmit).toHaveBeenCalledWith("chat:message:send", {
      chatId: "1",
      text: "test message",
    });
  });
  
});
