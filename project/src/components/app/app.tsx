import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const.js';
import PageNotFound from 'components/common/page-not-found/page-not-found.jsx';
import browserHistory from 'browser-history';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.QuestPage}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Main}>
          <Home />
        </Route>
        <Route
          render={() => (
            <PageNotFound />
          )}
        />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
