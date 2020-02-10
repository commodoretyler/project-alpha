import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route render={ () => <h1>Hello World</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
