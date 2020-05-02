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

  div.msgcontent {
    min-height: 480px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: ${(props) =>
      props.olderMessage ? "column-reverse" : "column"};
  }

  div#scroll {
    display: flex;
  }

  span.descriptioMsg {
    font-size: 12px;
  }

  div.myMessage {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
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
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

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

  button {
    border: none;
    background: none;
  }
`;
