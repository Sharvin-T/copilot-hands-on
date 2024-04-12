import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Home from 'pages/Home';
import NavigationBar from 'components/organisms/NavigationBar';
import ProductDetails from 'pages/ProductDiscription';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;