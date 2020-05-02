import React, { useState } from "react";
import api from "../../services/api";

import ListGroup from "../ListGroup";
import { Container, Group } from "./styles";

export default function GroupUsers() {
  const [groups, setGrpups] = useState([]);
  const [isVIsible, setIsVIsible] = useState(false);

  async function groupGenerate() {
    const response = await api.post("groupgenerate");

    const response2 = await api.get("group");
    setGrpups(response2.data);
    setIsVIsible(true);
  }

  return (
    <Container>
      <button id="generateGroups" className="submit" onClick={groupGenerate}>
        Gerar grupos
      </button>
      <Group>
        {groups.map((group, index) => (
          <div key={index}>
            <label>{group.name}</label>
            <ListGroup users={group.users} />
          </div>
        ))}
      </Group>
      {!isVIsible && (
        <Group>
          <div>
            <label>Gruop 1</label>
            <ListGroup />
          </div>
          <div>
            <label>Gruop 2</label>
            <ListGroup />
          </div>

          <div>
            <label>Gruop 3</label>
            <ListGroup />
          </div>
          <div>
            <label>Gruop 4</label>
            <ListGroup />
          </div>
        </Group>
      )}
    </Container>
  );
}
