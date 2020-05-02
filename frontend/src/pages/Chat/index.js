import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import ChatComponent from "../../components/ChatComponent";
import ListUserWithStatus from "../../components/ListUserWithStatus";

import { Container } from "./styles";

export default class Chat extends Component {
  state = {
    usernameState: "",
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    this.setState({ usernameState: username });
  }

  render() {
    return (
      <>
        <Header username={this.state.usernameState} />
        <Container>
          <ListUserWithStatus username={this.state.usernameState} />
          <ChatComponent username={this.state.usernameState} />
        </Container>
      </>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string,
};
