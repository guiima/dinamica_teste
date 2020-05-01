import React from "react";
import { MdSettingsPower } from "react-icons/md";
import io from "socket.io-client";

import history from "../../services/history";
import { Container, LogoContent, BodyHeader } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () =>
  console.log("[IO] Connect => new connection list of users")
);

export default function Header({ username }) {
  function handleExit() {
    socket.emit("chat.disconnect", {
      username: username,
    });
    history.push("/");
  }
  return (
    <Container>
      <LogoContent>
        {/* <span onClick={() => history.push("")}>Formare Tech</span> */}
        <span>Formare Tech</span>
      </LogoContent>
      <BodyHeader>
        {console.log("user no header", username)}
        <span>{username}</span>
        <MdSettingsPower onClick={handleExit} />
      </BodyHeader>
    </Container>
  );
}
