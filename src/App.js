import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Notfound from './pages/not-found/not-found-page';
import Header from './components/header/header.component';
import LoginRegister from './pages/login-register-page/login-register-page';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	state = {
		currentUser: null
	};

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			this.setState({ currentUser: userAuth });
			console.log(this.state.currentUser);
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route path="/shop" component={ShopPage} />
					<Route path="/login" component={LoginRegister} />
					<Route path="/not-found" component={Notfound} />
					<Route exact path="/" component={HomePage} />
					<Redirect to="not-found" />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
