import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 10px;
  }

  input#password {
    margin-top: 5px;
  }

  margin-top: 20px;
  border: 1px solid #ced6e0;
  border-radius: 4px;
  padding: 20px 20px 10px 20px;
`;

export const LinkContent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;
`;
