import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.style.css';

const MenuItem = ({ item }) => {
	const { title, image, size } = item;
	console.log(item);
	return (
		<div className={`${size} menu-item`}>
			<div
				className="bg-image"
				style={{
					backgroundImage: `url(${image})`
				}}
			/>
			<Link className="content" to={`/shop/${title}`}>
				<h3 className="title">{title}</h3>
				<span className="subtitle">shop now</span>
			</Link>
		</div>
	);
};

export default MenuItem;
