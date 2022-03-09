import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';
import Homepage from "./pages/homepage/Homepage";
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
