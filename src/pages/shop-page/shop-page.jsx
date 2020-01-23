import React, { Component } from 'react';
import SHOP_DATA from '../../services/collection-service';
import Collection from './../../components/collection/collection.component';
import './shop-page.style.css';

class ShopPage extends Component {
	state = {
		data: SHOP_DATA
	};
	render() {
		return (
			<div className="shop">
				<h2>Collection</h2>
				{this.state.data.map(({ id, ...rest }) => <Collection key={id} {...rest} />)}
			</div>
		);
	}
}

export default ShopPage;
