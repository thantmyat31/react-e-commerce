import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Notfound from './pages/not-found/not-found-page';
import Header from './components/header/header.component';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/shop" component={ShopPage} />
					<Route path="/not-found" component={Notfound} />
					<Route exact path="/" component={HomePage} />
					<Redirect to="not-found" />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
