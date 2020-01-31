import React, { Component } from 'react';
import './home-page.style.css';
import Menu from './../../components/menu/menu.component';

class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<Menu />
			</div>
		);
	}
}

export default HomePage;
