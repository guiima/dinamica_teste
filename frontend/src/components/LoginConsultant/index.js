import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { Link } from "react-router-dom";

import { Container, LinkContent } from "./styles";

export default function LoginConsultant() {
  return (
    <Container>
      <Form>
        {/* <label htmlFor="">Insira seu username</label> */}
        <Input name="username" placeholder="Insira o username" />
        {/* <Input name="password" placeholder="Insira a senha" /> */}
        <button className="submit">Entrar</button>
      </Form>
      {/* <LinkContent>
        <Link className="link" to="/">
          Registrar-se
        </Link>
      </LinkContent> */}
    </Container>
  );
}
