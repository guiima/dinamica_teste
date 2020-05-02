import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import io from "socket.io-client";
import PropTypes from "prop-types";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import ChatComponent from "../ChatComponent";
import { DashboardContent, FormContent, MessageContent } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () =>
  console.log("[IO] Connect => new connection serach msg")
);

const schema = Yup.object().shape({
  username: Yup.string().required("Insira o username"),
});

const schema2 = Yup.object().shape({
  date: Yup.string().required("Insira uma data"),
});

export default function SearchMessage({ username }) {
  const [messages, setMessages] = useState([]);
  const [valueSelect, setvalueSelect] = useState(undefined);
  const [olderMessage, setOlderMessage] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");

  useEffect(() => {
    const handleMessagePrivate = async (newMessages) => {
      await setMessages(newMessages);
    };

    socket.on("message.private", handleMessagePrivate);
    console.log("mesg priv", messages);

    return () => socket.off("message.private", handleMessagePrivate);
  }, [messages]);

  function handleSubmitUsername(data) {
    // e.preventDefault();
    // const handleMessage = () => {};
    // socket.on("chat.connected");
    console.log("submit data", data);

    socket.emit("message.private", data);
    setUsernameInput("");
  }

  function handleSubmitDate(e) {
    e.preventDefault();
    console.log("submitei na data");
  }

  function changeSelect(e) {
    setvalueSelect(e.target.value);
    setOlderMessage(!olderMessage);
  }

  function changeUsernameInput(e) {
    setUsernameInput(e.target.valeu);
  }

  return (
    <DashboardContent>
      <FormContent>
        <Form schema={schema} onSubmit={handleSubmitUsername}>
          <label>Pesquisa por username: </label>
          <div className="search">
            <div className="err">
              <Input
                name="username"
                type="text"
                placeholder="Insira o username"
                value={usernameInput}
                onChange={changeUsernameInput}
              />
            </div>
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </Form>

        <Form schema={schema2} onSubmit={handleSubmitDate}>
          <label>Pesquisa por data: </label>
          <div className="search">
            <div className="err">
              <Input name="date" type="date" placeholder="Insira o data" />
            </div>
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </Form>
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
