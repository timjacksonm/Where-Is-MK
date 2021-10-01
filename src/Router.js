import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Game from './components/pages/game';
import Leaderboard from './components/pages/leaderboards';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game/:timeLimit/:amountToFind">
          <Game />
        </Route>
        <Route path="/leaderboards/:timeLimit/:amountToFind/:completionTime">
          <Leaderboard />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
