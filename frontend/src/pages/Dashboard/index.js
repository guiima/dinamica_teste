import React, { Component } from "react";

import Header from "../../components/Header";
import SearchMessage from "../../components/SearchMessage";
import GroupUsers from "../../components/GroupUsers";
import { Container, DashBoardContent } from "./styles";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <DashBoardContent>
          <GroupUsers />
          <SearchMessage />
        </DashBoardContent>
      </Container>
    );
  }
}
