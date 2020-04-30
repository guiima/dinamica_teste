import React, { useState } from "react";

import { Scrollbar } from "react-scrollbars-custom";
import { Container, UsersContent } from "./styles";

export default function ListGroup() {
  const [listUsers, setListUsers] = useState([
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
  ]);
  return (
    <Container>
      <Scrollbar id="scroll" style={{ height: 100, width: 100 }}>
        <UsersContent>
          {listUsers.map((user, index) => (
            <span key={index}>{user}</span>
          ))}
        </UsersContent>
      </Scrollbar>
    </Container>
  );
}
