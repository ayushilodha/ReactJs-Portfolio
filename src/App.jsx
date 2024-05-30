import "./App.css";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import { HashRouter } from "react-router-dom";


import Portfolio from "./Portfolio";
import store from "./store/middleware";

const generateClassName = createGenerateClassName({
  seed: "portfolio",
});
function App() {
  return (
    <>
      <Provider store={store}> 
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={""}>
            <HashRouter hashType="noslash">
              <Portfolio />
            </HashRouter>
          </ThemeProvider>
        </StylesProvider>
      </Provider>
      {/* 1. Provider --> Used to provide access to redux store to all components automatically. 
             The store prop is passed to the Provider component to specify which Redux store should be used.
          2. StylesProvider --> Allows users to customise the styling of MUI components
             seed :  used to provide a prefix for the generated class names and that can be viewed in the inspect 
          3. ThemeProvider -->  used to provide a theme to all components in your React application
          4. HashRouter --> used to create a routing container */}
    </>
  );
}

export default App;
