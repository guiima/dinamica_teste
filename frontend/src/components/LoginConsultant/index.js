import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import history from "../../services/history";
import { Container } from "./styles";

const schema = Yup.object().shape({
  username: Yup.string().required("Insira o username para acessar o sistema"),
});

export default function LoginConsultant() {
  const [username, setUsername] = useState("");

  function handleSubmit() {
    history.push(`/dashboard/${username}`);
  }

  function changeInputUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Insira o username"
            value={username}
            onChange={changeInputUsername}
          />
          <button type="submit" className="submit">
            Entrar
          </button>
        </Form>
      </Container>
    </>
  );
}
