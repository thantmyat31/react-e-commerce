import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import Notfound from './pages/not-found/not-found-page';
import LoginRegister from './pages/login-register-page/login-register-page';
import Header from './components/header/header.component';
import './App.css';

class App extends Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/login"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <LoginRegister />)}
					/>
					<Route path="/not-found" component={Notfound} />
					<Route exact path="/" component={HomePage} />
					<Redirect to="not-found" />
				</Switch>
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => {
		dispatch(setCurrentUser(user));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
