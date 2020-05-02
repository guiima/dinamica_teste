import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import SearchMessage from "../../components/SearchMessage";
import GroupUsers from "../../components/GroupUsers";
import { Container, DashBoardContent } from "./styles";

export default class Dashboard extends Component {
  state = {
    usernameState: "",
  };
  componentDidMount() {
    const { username } = this.props.match.params;
    this.setState({ usernameState: username });
  }

  render() {
    return (
      <Container>
        <Header />
        <DashBoardContent>
          <GroupUsers />
          <SearchMessage username={this.state.usernameState} />
        </DashBoardContent>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  username: PropTypes.string,
  propsMessage: PropTypes.array,
};
