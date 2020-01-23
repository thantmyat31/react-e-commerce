import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Notfound from './pages/not-found/not-found-page';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/shop" component={ShopPage} />
				<Route path="/not-found" component={Notfound} />
				<Route exact path="/" component={HomePage} />
				<Redirect to="not-found" />
			</Switch>
		);
	}
}

export default App;
