import React from "react";
import { MdSettingsPower } from "react-icons/md";

import { Container, LogoContent, BodyHeader } from "./styles";

export default function Header() {
  return (
    <Container>
      <LogoContent>
        <span>Formare Tech</span>
      </LogoContent>
      <BodyHeader>
        <span>Guima</span>
        <MdSettingsPower />
      </BodyHeader>
    </Container>
  );
}
