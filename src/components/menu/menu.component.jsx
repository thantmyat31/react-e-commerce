import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './menu.style.css';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import menuItemsList from './../../redux/menu/menu.selector';

const Menu = ({ items }) => {
	return (
		<div className="menu">
			{items.map((i) => <MenuItem key={i.id} title={i.title} image={i.image} size={i.size} />)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	items: menuItemsList
});

export default connect(mapStateToProps)(Menu);
