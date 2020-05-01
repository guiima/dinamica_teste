import React, { useState } from "react";
// import { Form, Input } from "@rocketseat/unform";

import history from "../../services/history";

import { Container } from "./styles";

export default function LoginUser() {
  const [username, setUsername] = useState("");

  function hanldeSubmit() {
    history.push(`/chat/${username}`);
  }

  function changeInputUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <Container>
      {/* <Form>
        <Input type="text" name="username" placeholder="Insira o username" />
        <button onClick={hanldeSubmit} className="submit">
          Entrar
        </button>
      </Form> */}
      <form onSubmit={hanldeSubmit}>
        {/* <label htmlFor="">Insira seu username</label> */}
        <input
          type="text"
          name="username"
          placeholder="Insira o username"
          value={username}
          onChange={changeInputUsername}
        />
        <button className="submit">Entrar</button>
      </form>
    </Container>
  );
}
