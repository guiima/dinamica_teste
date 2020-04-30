import React from "react";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

export default function LoginUser() {
  return (
    <Container>
      <Form>
        {/* <label htmlFor="">Insira seu username</label> */}
        <Input name="username" placeholder="Insira o username" />
        <button className="submit">Entrar</button>
      </Form>
    </Container>
  );
}
