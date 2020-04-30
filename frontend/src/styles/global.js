import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    /* background-image: linear-gradient(red, blue); */
    
  }

  button.primary {
    background: #0984e3;
    border: 1px solid;
    border-radius: 4px;
    padding: 5px 10px;
    color: white;

    :hover {
      opacity: 0.9;
    }
  }

  button.secundary {
    background: white;
    border: 1px solid;
    border-radius: 4px;
    padding: 5px 10px;
    color: #0984e3;

    :hover {
      opacity: 0.9;
    }
  }

  button.submit {
    background: #00cec9;
    border: 1px solid;
    border-radius: 4px;
    padding: 5px 10px;
    color: white;

    :hover {
      opacity: 0.9;
    }
  }

  input {
    padding: 5px 0px 5px 10px;
    border: 1px solid;
    border-color: #ced6e0;
    border-radius: 4px;
    font-size: 12px;

    ::placeholder {
      color: #ced6e0;
    }
  }

  a.link {
    font-size: 12px;
    color: #0984e3;
  }

  button {
    cursor: pointer;
  }


`;
