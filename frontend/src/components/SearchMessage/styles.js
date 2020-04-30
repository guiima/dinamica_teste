import styled from "styled-components";

export const DashboardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 92%; */
  flex-direction: column;
  /* background: red; */

  select {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  div#select {
    /* background: red; */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  form {
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      margin-top: 5px;
      margin-right: 5px;
    }
  }

  input {
    margin-top: 10px;
  }

  button {
    border: none;
    background: none;
    margin-left: 5px;

    svg {
      /* background: red; */
      margin-bottom: -2px;
    }
  }
`;

export const MessageContent = styled.div`
  background: #f1f2f6;
  height: 400px;
  width: 300px;
  border: 1px solid #ced6e0;
  border-radius: 4px;
`;
