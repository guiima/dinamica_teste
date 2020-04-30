import styled from "styled-components";

export const Container = styled.div`
  /* background: green; */
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  display: flex;
  /* background: red; */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
