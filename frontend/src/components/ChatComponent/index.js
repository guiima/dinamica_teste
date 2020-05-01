/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { MdSend } from "react-icons/md";
import PropTypes from "prop-types";

import { Scrollbar } from "react-scrollbars-custom";

import { ChatContent, BodyChat, SendMessage, Messages } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () => console.log("[IO] Connect => new connection"));

export default function ChatComponent({ username }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [usernameState, setUsernameState] = useState("");

  useEffect(() => {
    setUsernameState(username);
  }, [username]);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
    };

    socket.on("chat.message", handleNewMessage);

    return () => socket.off("chat.message", handleNewMessage);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim()) {
      socket.emit("chat.message", {
        date: "2020-05-02",
        username: usernameState,
        hour: "12:00",
        content: message,
      });
    }
    setMessage("");
  };

  const chanceInputMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <ChatContent>
      <BodyChat>
        <Messages>
          <Scrollbar id="scroll" style={{ height: 490 }}>
            <div className="msgcontent">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    usernameState === message.username
                      ? "myMessage"
                      : "otherMsg"
                  }
                >
                  <span
                    className={
                      usernameState === message.username ? "myMsg" : "otherMsg"
                    }
                  >
                    {message.content}
                  </span>
                  <div className="descriptioMsg">
                    <span className="descriptioMsg">{message.date} - </span>
                    <span className="descriptioMsg">{message.username} - </span>
                    <span className="descriptioMsg">{message.hour} - </span>
                  </div>
                </div>
              ))}
            </div>
          </Scrollbar>
        </Messages>
      </BodyChat>
      <form onSubmit={handleSubmit}>
        <SendMessage>
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={message}
            onChange={chanceInputMessage}
          />
          <button type="submit">
            <MdSend />
          </button>
        </SendMessage>
      </form>
    </ChatContent>
  );
}

ChatComponent.propTypes = {
  username: PropTypes.string,
};
