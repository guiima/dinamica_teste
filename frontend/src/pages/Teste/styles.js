import styled from "styled-components";

export const Container = styled.div`
  background: yellow;
  height: 100%;
  color: white;

  div.messageContent {
    width: 300px;
    height: 500px;
    background: blue;
    display: flex;
    flex-direction: column-reverse;

    div.msg {
      background: red;
    }
  }
`;
