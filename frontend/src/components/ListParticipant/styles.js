import styled from "styled-components";

export const Container = styled.div`
  button {
    margin-bottom: 10px;
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

  span#loading {
    position: absolute;
  }

  div.userStatus {
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
