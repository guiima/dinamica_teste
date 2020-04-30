import React from "react";
import { Form, Input } from "@rocketseat/unform";

import history from "../../services/history";

import { Container } from "./styles";

export default function LoginUser() {
  function hanldeSubmit() {
    history.push("/chat");
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
        <input type="text" name="username" placeholder="Insira o username" />
        <button className="submit">Entrar</button>
      </form>
    </Container>
  );
}
