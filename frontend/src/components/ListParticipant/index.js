import React, { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import api from "../../services/api";

import { UsersContent, Container } from "./styles";

export default function ListParticipant() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPaticipant, setTotalPaticipant] = useState(0);

  async function participantGenerate() {
    setLoading(true);
    const response = await api.post("/generateparticipant");
    setLoading(false);

    setUsers(response.data);
    setTotalPaticipant(response.data.length);
  }

  return (
    <Container>
      <button className="submit" onClick={participantGenerate}>
        Gerar participantes
      </button>
      <UsersContent>
        <Scrollbar style={{ height: 490 }}>
          {users.map((user, index) => (
            <div key={index} className="userStatus">
              <span>{user.username}</span>
            </div>
          ))}

          {loading && <span id="loading">Carregando...</span>}
        </Scrollbar>
      </UsersContent>
      <span>Total: {totalPaticipant}</span>
    </Container>
  );
}
