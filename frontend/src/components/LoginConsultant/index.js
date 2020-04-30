import React from "react";
// import { Form, Input } from "@rocketseat/unform";
// import { Link } from "react-router-dom";
import history from "../../services/history";

import { Container } from "./styles";

export default function LoginConsultant() {
  function handleSubmit() {
    history.push("/dashboard");
  }

  return (
    <>
      <Container>
        {/* <Form>
        <label htmlFor="">Insira seu username</label>
        <Input type="text" name="username" placeholder="Insira o username" />
        <Input name="password" placeholder="Insira a senha" />
        <button className="submit">Entrar</button>
      </Form> */}
        {/* <LinkContent>
        <Link className="link" to="/">
        Registrar-se
        </Link>
      </LinkContent> */}

        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="">Insira seu username</label> */}
          <input type="text" name="username" placeholder="Insira o username" />
          {/* <Input name="password" placeholder="Insira a senha" /> */}
          <button className="submit">Entrar</button>
        </form>
      </Container>
    </>
  );
}
