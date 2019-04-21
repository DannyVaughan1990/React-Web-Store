import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Phones from './components/Phones';
import Tablets from './components/Tablets';
import Laptops from './components/Laptops';
import Default from './components/Default';
import Signup from './components/auth/Signup';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/details" component={Details}/>
          <Route path="/phones" component={Phones}/>
          <Route path="/tablets" component={Tablets}/>
          <Route path="/laptops" component={Laptops}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
