import styled from "styled-components";

export const ChatContent = styled.div`
  border: 1px solid #ced6e0;
  border-radius: 4px;
  max-height: 550px;
  max-width: 450px;
  height: 100%;
  width: 100%;

  form {
    margin-top: -30px;
  }
`;

export const BodyChat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  background: #f1f2f6;
`;

export const Messages = styled.div`
  margin-bottom: 50px;
  /* display: flex;
  flex-direction: column-reverse; */
  /* background: gray; */

  div#scroll {
    display: flex;
    flex-direction: column-reverse;
  }

  div.myMessage {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;

    span.myMsg {
      border: 1px solid;
      padding: 0px 10px;
      background: #b8e994;
      border-radius: 4px;
      margin-top: 5px;
      margin-right: 10px;
    }
  }

  div.otherMsg {
    display: flex;
    padding-right: 10px;

    span.otherMsg {
      border: 1px solid;
      padding: 0px 10px;
      background: white;
      border-radius: 4px;
      margin-top: 5px;
      margin-left: 10px;
    }
  }
`;

export const SendMessage = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 100%;
    margin-left: 5px;
  }

  svg {
    margin: 0px 5px;
  }
`;
