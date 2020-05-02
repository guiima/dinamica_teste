import styled from "styled-components";

export const Container = styled.div`
  background: green;
  background: white;
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;

  button#generateGroups {
    margin-bottom: 20px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
