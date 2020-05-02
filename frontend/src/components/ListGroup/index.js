import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Scrollbar } from "react-scrollbars-custom";
import { Container, UsersContent } from "./styles";

export default function ListGroup({ users }) {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    setListUsers(users);
    console.log("usersss", users);
  }, [users]);

  return (
    <Container>
      <Scrollbar id="scroll" style={{ height: 100, width: 100 }}>
        <UsersContent>
          {listUsers.map((user, index) => (
            <span key={index}>{user.username}</span>
          ))}
        </UsersContent>
      </Scrollbar>
    </Container>
  );
}

ListGroup.defaultProps = {
  users: [],
};

ListGroup.propTypes = {
  users: PropTypes.array,
};
