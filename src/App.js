import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
