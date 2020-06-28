import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Accomodations } from '../Pages/Accomodations';
import styled from 'styled-components';
import { Flex } from '../shared/Flex';

const Main = styled(Flex)`
  height: calc(100vh - 10rem);
`;

export function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/accomodations">
            <Accomodations />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}
