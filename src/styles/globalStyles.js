import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    scroll-behavior: smooth;
  }

body {
    background-color: black;
}

.Typist .Cursor {
    display: inline-block; }
    .Typist .Cursor--blinking {
      opacity: 1;
      animation: blink 1s linear infinite; }
  
  @keyframes blink {
    0% {
      opacity: 1; }
    50% {
      opacity: 0; }
    100% {
      opacity: 1; } }

.d-unset {
  display: unset !important;
}

.form-input-section {
  width: 100%;
  max-width: 900px;
}

.form-input {
  width: 100%;
  max-width: 900px;
  height: 50px;
  outline: none;
}

.form-textbox {
  height: 150px;
}

button {
  margin-top: 30px;
  width: 300px;
  height: 50px;
  margin-left: auto;
  color: white;
  background-color: #a00404;
  border-color: #ff0000;
  border-radius: 5px;
  outline: none;
  @media (max-width: 768px) {
    margin: 30px auto;
  }
}
button:hover {
  background-color: #d50000;
}

a {
    display: inline-block !important;
}
  
`;

export default GlobalStyle;
