import React, { Component } from 'react';
import './menu.style.css';
import MenuItem from '../menu-item/menu-item.component';

class Menu extends Component {
	state = {
		items: [
			{
				id: 1,
				title: 'hats',
				image:
					'https://www.roxannshats.com/wp-content/uploads/2018/12/3c5c608bf282e6a4a3aefd23a558a05b-large.jpg'
			},
			{
				id: 2,
				title: 'jackets',
				image:
					'https://brobible.files.wordpress.com/2020/01/outerwear-jackets-winter-clearance-best-of-5.jpg?quality=90&w=372&h=217'
			},
			{
				id: 3,
				title: 'shoes',
				image:
					'https://www.keds.com/on/demandware.static/-/Sites-keds_us-Library/default/dw7429785d/content/seasonal-content/landing-pages/she/2019/07/mobile-row1-img.jpg'
			},
			{
				id: 4,
				title: 'women',
				image:
					'https://heavyeditorial.files.wordpress.com/2017/03/best-dresses-for-older-women.jpg?quality=65&strip=all',
				size: 'large'
			},
			{
				id: 5,
				title: 'men',
				image:
					'https://puzl-production.s3.amazonaws.com/files/uploads/files/001/662/649/original/16.jpg?1526307553',
				size: 'large'
			}
		]
	};
	render() {
		return (
			<div className="menu">
				{this.state.items.map((i) => <MenuItem key={i.id} title={i.title} image={i.image} size={i.size} />)}
			</div>
		);
	}
}

export default Menu;
