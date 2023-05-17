import { AppRouter } from "./pages/routes"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background-color: #13141f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }

  html{
    background-color: #13141f;
  }
`

function App() {

  return (
    <>

      <GlobalStyles/>

      <AppRouter/>

    </>
  )
}

export default App