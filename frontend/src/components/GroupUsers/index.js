import React from "react";

import ListGroup from "../ListGroup";
import { Container, Group } from "./styles";

export default function GroupUsers() {
  return (
    <Container>
      <Group>
        <div>
          <label>Gruop 1</label>
          <ListGroup />
        </div>
        <div>
          <label>Gruop 2</label>
          <ListGroup />
        </div>
      </Group>
      <Group>
        <div>
          <label>Gruop 3</label>
          <ListGroup />
        </div>
        <div>
          <label>Gruop 4</label>
          <ListGroup />
        </div>
      </Group>
    </Container>
  );
}
