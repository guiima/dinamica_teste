/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import io from "socket.io-client";

import { UsersContent } from "./styles";

const socket = io("http://localhost:8081");
socket.on("connect", () =>
  console.log("[IO] Connect => new connection list of users")
);

export default function ListUserWithStatus({ username }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleNewUsers = (newUsers) => {
      setUsers(newUsers);
    };

    socket.on("chat.connected", handleNewUsers);

    return () => socket.off("chat.connected", handleNewUsers);
  }, [users]);

  useEffect(() => {
    if (username.trim()) {
      socket.emit("chat.connected", {
        username: username,
      });
    }
  }, [username]);

  return (
    <UsersContent>
      <Scrollbar style={{ height: 490 }}>
        {users.map((user, index) => (
          <div key={index} className="userStatus">
            <span>{user.username}</span>
            <div className="statusOn"></div>
          </div>
        ))}
      </Scrollbar>
    </UsersContent>
  );
}
