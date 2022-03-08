import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';
import Homepage from "./pages/homepage/Homepage";
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
