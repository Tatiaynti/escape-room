import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { createAPI } from 'services/api.js';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'store/reducer.js';
import { fetchQuestsAction } from 'store/api-actions.js';
import { Provider } from 'react-redux';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
