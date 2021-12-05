// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
} from 'components/common/common';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/detailed-quest/deta... Remove this comment to see the full error message
import DetailedQuest from 'components/detailed-quest/detailed-quest';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/contacts/contacts' ... Remove this comment to see the full error message
import Contacts from 'components/contacts/contacts';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/home/home' or its c... Remove this comment to see the full error message
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'const.js' or its corresponding... Remove this comment to see the full error message
import { AppRoute } from 'const.js';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/common/page-not-fou... Remove this comment to see the full error message
import PageNotFound from 'components/common/page-not-found/page-not-found.jsx';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'browser-history' or its corres... Remove this comment to see the full error message
import browserHistory from 'browser-history';

const App = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ThemeProvider theme={appTheme}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <S.GlobalStyle />
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Router history={browserHistory}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Switch>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route exact path={AppRoute.QuestPage}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <DetailedQuest />
        </Route>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route exact path={AppRoute.Contacts}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Contacts />
        </Route>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route exact path={AppRoute.Main}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Home />
        </Route>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route
          render={() => (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PageNotFound />
          )}
        />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
