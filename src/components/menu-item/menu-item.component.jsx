import React from 'react';
import './menu-item.style.css';

const MenuItem = ({ title, image, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className="bg-image"
				style={{
					backgroundImage: `url(${image})`
				}}
			/>
			<div className="content">
				<h3 className="title">{title}</h3>
				<span className="subtitle">shop now</span>
			</div>
		</div>
	);
};

export default MenuItem;
