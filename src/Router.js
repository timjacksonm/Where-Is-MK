import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Game from './components/pages/game';
import Results from './components/pages/results';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game/:time/:characters">
          <Game />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
