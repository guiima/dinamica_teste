import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

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

export const UsersContent = styled.div`
  border: 1px solid #ced6e0;
  border-radius: 4px;
  max-height: 550px;
  height: 100%;
  width: 100%;
  max-width: 200px;
  margin-right: 10px;

  div.usersStatus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }

  span {
    margin: 5px 5px 0px 0px;
  }

  div.statusOn {
    width: 10px;
    height: 10px;
    background: #2ed573;
    border-radius: 50%;
    margin-bottom: -7px;
  }

  div.statusOff {
    width: 10px;
    height: 10px;
    background: #a4b0be;
    border-radius: 50%;
    margin-bottom: -7px;
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
