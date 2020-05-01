import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import ChatComponent from "../../components/ChatComponent";
import ListUserWithStatus from "../../components/ListUserWithStatus";

import { Container } from "./styles";

export default class Chat extends Component {
  state = {
    username: "anonimo",
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    this.setState({ username: username });
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <ListUserWithStatus />
          <ChatComponent username={this.state.username} />
        </Container>
      </>
    );
  }
}

// Chat.defaultProps = {
//   username: "anonimo",
// };

Chat.propTypes = {
  username: PropTypes.string,
};
