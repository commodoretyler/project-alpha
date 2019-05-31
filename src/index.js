import React              from 'react';
import { render }         from 'react-dom';
import { Provider }       from 'react-redux';
import store              from 'SRC/store';
import {
  BrowserRouter,
  Route,
  Switch
}                         from 'react-router-dom';

render((
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route render={ () => <h1>Hello World</h1>} />
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
