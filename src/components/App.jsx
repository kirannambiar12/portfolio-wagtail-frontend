import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from '@apollo/react-hooks';
import GlobalStyle from '../styles/globalStyles';
import Analytics from "react-router-ga";
import { client } from '../utils';
import theme from "../styles/Theme";
import Homepage from './Home/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './NotFound';
import { ToastProvider } from "react-toast-notifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";



function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      startEvent: "load",
      // disable: "mobile",
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Router >
          {/* <GoBack /> */}
          <Analytics id="UA-179513110-1">
            <ToastProvider>
              <Switch>
                <Route exact path="/" component={Homepage} />
                {/* <Route path="*" component={NotFound} /> */}
              </Switch>
              </ToastProvider>
          </Analytics>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;