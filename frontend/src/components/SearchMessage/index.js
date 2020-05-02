import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import io from "socket.io-client";
import ChatComponent from "../ChatComponent";

import { DashboardContent, FormContent, MessageContent } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () =>
  console.log("[IO] Connect => new connection serach msg")
);

export default function SearchMessage() {
  const [messages, setMessages] = useState([]);
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    socket.emit("show.message");
  }, []);

  useEffect(() => {
    const handleNewMessages = async (newMessages) => {
      await setMessages(newMessages);
      setisVisible(true);
    };

    socket.on("show.message", handleNewMessages);
    console.log("entrei 2", messages);

    return () => socket.off("show.message", handleNewMessages);
  }, [messages]);

  function handleSubmitUsername(e) {
    // e.preventDefault();
    // const handleMessage = () => {};
    // socket.on("chat.connected");
  }

  function handleSubmitDate(e) {
    e.preventDefault();
    console.log("submitei na data");
  }

  return (
    <DashboardContent>
      <FormContent>
        <form onSubmit={handleSubmitUsername}>
          <label>Pesquisa por username: </label>
          <div>
            <input
              name="username"
              type="text"
              placeholder="Insira o username"
            />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>

        <form onSubmit={handleSubmitDate}>
          <label>Pesquisa por data: </label>
          <div>
            <input name="username" type="text" placeholder="Insira o data" />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>
      </FormContent>
      <div id="select">
        <select id="data">
          <option value="Recentes">Recentes</option>
          <option value="Mais antigas">Mais antigas</option>
        </select>
      </div>
      {/* <MessageContent></MessageContent> */}
      {console.log("tem msg?", messages)}
      {isVisible && <ChatComponent propsMessage={messages} />}
    </DashboardContent>
  );
}
