import React from "react";
import { MdSettingsPower } from "react-icons/md";

import history from "../../services/history";
import { Container, LogoContent, BodyHeader } from "./styles";

export default function Header() {
  function handleExit() {
    history.push("/");
  }
  return (
    <Container>
      <LogoContent>
        {/* <span onClick={() => history.push("")}>Formare Tech</span> */}
        <span>Formare Tech</span>
      </LogoContent>
      <BodyHeader>
        <span>Guima</span>
        <MdSettingsPower onClick={handleExit} />
      </BodyHeader>
    </Container>
  );
}
