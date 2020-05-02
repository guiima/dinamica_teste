import React, { Component } from "react";

import LoginUser from "../../components/LoginUser";
import LoginConsultant from "../../components/LoginConsultant";

import { Container, ButtonGroup } from "./styles";

export default class Login extends Component {
  state = {
    isUser: true,
  };

  handleUser = () => {
    this.setState({ isUser: true });
  };
  

  handleConsultant = () => {
    this.setState({ isUser: false });
  };

  render() {
    return (
      <Container>
        <h1 id="bem-vindo">Bem-vindo ao chat da Formare Tech</h1>
        <ButtonGroup>
          <button
            className={this.state.isUser ? "primary" : "secundary"}
            onClick={this.handleUser}
          >
            Sou usuário
          </button>
          <button
            id="consultant"
            className={!this.state.isUser ? "primary" : "secundary"}
            onClick={this.handleConsultant}
          >
            Sou consultor
          </button>
        </ButtonGroup>

        {this.state.isUser && <LoginUser />}
        {!this.state.isUser && <LoginConsultant />}
      </Container>
    );
  }
}
