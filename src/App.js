import {useCallback,useState} from "react"
import { AppContainer,MainSection } from "./components/app.style";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/button.styles";
const  App=()=> {
  const [currentTheme,setCurrentTheme] = useState("light")

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );


  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
            <h1>Voce esta no modo {currentTheme} </h1>
            <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
              switch to  mode
              </Button>

        </MainSection>
      </AppContainer>  
    </ThemeProvider>
  );
}

export default App;
