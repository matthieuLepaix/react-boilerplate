import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Accomodations, About, Home } from '../Pages';
import { Flex, Overlay } from '../shared';

const Main = styled(Flex)`
  min-height: calc(100vh - 10rem);
`;

export const App = () => {
  const [mobileNavigation, setMobileNavigation] = useState({ open: false });
  return (
    <Router basename="/">
      {mobileNavigation.open && (
        <Overlay onClick={() => setMobileNavigation({ open: false })} />
      )}
      <Header
        mobileNavigation={mobileNavigation}
        setMobileNavigation={setMobileNavigation}
      />
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
};
