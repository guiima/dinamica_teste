import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import io from "socket.io-client";
import ChatComponent from "../ChatComponent";
import PropTypes from "prop-types";

import { DashboardContent, FormContent, MessageContent } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () =>
  console.log("[IO] Connect => new connection serach msg")
);

export default function SearchMessage({ username }) {
  const [messages, setMessages] = useState([]);
  const [valueSelect, setvalueSelect] = useState(undefined);
  const [olderMessage, setOlderMessage] = useState(false);

  function handleSubmitUsername(e) {
    // e.preventDefault();
    // const handleMessage = () => {};
    // socket.on("chat.connected");
  }

  function handleSubmitDate(e) {
    e.preventDefault();
    console.log("submitei na data");
  }

  function changeSelect(e) {
    setvalueSelect(e.target.value);
    setOlderMessage(!olderMessage);
    console.log("mudou");
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
        <select id="data" value={valueSelect} onChange={changeSelect}>
          <option value="Recentes">Recentes</option>
          <option value="Mais antigas">Mais antigas</option>
        </select>
      </div>
      <ChatComponent
        username={username}
        propsMessage={messages}
        olderMessage={olderMessage}
      />
    </DashboardContent>
  );
}

SearchMessage.propTypes = {
  username: PropTypes.string,
  propsMessage: PropTypes.array,
};
