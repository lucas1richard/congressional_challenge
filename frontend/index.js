import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import store from 'app/redux/store';
import theme from 'theme';

import {
  browserHistory,
  Route,
  Router
} from 'react-router';

import Home from 'containers/Home';

import { Provider } from 'react-redux';
import Main from './Main';

const App = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Route component={Main}>
          <Route path="/" component={Home} />
        </Route>
      </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));

// if (module.hot) {
//   const NextApp = require('./App').default;

//   module.hot.accept('./App', () => {
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp />
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }
