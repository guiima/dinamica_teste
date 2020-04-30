import styled from "styled-components";

export const Container = styled.div`
  background: #303952;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 22px;
    cursor: pointer;
  }
`;

export const BodyHeader = styled.div`
  color: white;
  display: flex;
  align-items: center;
  /* background: red; */
  font-size: 18px;

  svg {
    margin: 5px 10px 0px 15px;
    cursor: pointer;
  }
`;
