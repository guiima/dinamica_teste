/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { MdSend } from "react-icons/md";
import PropTypes from "prop-types";

import { Scrollbar } from "react-scrollbars-custom";

import { ChatContent, BodyChat, SendMessage, Messages } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () => console.log("[IO] Connect => new connection"));

export default function ChatComponent({
  username,
  propsMessage,
  olderMessage,
}) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [usernameState, setUsernameState] = useState("");
  const scrollbars = useRef(null);

  useEffect(() => {
    socket.emit("show.message");
  }, []);

  useEffect(() => {
    const handleNewMessages = async (newMessages) => {
      await setMessages(newMessages);
    };

    socket.on("show.message", handleNewMessages);

    return () => socket.off("show.message", handleNewMessages);
  }, [messages]);

  useEffect(() => {
    setUsernameState(username);
  }, [username]);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
    };

    socket.on("chat.message", handleNewMessage);

    scrollbars.current.scrollToBottom();

    return () => socket.off("chat.message", handleNewMessage);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();

    const day = now.getDate() <= 9 ? `0${now.getDate()}` : now.getDate();
    const month =
      now.getMonth() + 1 <= 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
    const newYear = now.getYear();
    const year = newYear.toString().substring(1, 3);

    const hour = now.getHours() <= 9 ? `0${now.getHours()}` : now.getHours();
    const minutes = now.getMinutes();

    if (message.trim()) {
      socket.emit("chat.message", {
        date: `${day}/${month}/${year}`,
        username: usernameState,
        hour: `${hour}:${minutes}`,
        content: message,
      });
    }

    setMessage("");
  };

  const chanceInputMessage = (e) => {
    setMessage(e.target.value);
  };

  function formatDate(date) {
    if (date.length > 10) {
      const dateYYYYMMDD = date.split("T");

      const newDate = dateYYYYMMDD[0].split("-");

      const day = newDate[2];
      const month = newDate[1];
      const yearYYYY = newDate[0];

      const year = yearYYYY.split("");

      return `${day}/${month}/${year[2]}${year[3]}`;
    } else {
      return date;
    }
  }

  return (
    <ChatContent>
      <BodyChat>
        <Messages olderMessage={olderMessage}>
          <Scrollbar id="scroll" ref={scrollbars} style={{ height: 490 }}>
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
                    {/* <span className="descriptioMsg">{message.date} - </span> */}
                    <span className="descriptioMsg">
                      {formatDate(message.date)} -{" "}
                    </span>
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

ChatComponent.defaultProps = {
  username: "anonimo",
  propsMessage: [],
  olderMessage: false,
};

ChatComponent.propTypes = {
  username: PropTypes.string,
  propsMessage: PropTypes.array,
  olderMessage: PropTypes.bool,
};
