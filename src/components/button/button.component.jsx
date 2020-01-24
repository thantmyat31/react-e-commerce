import React from 'react';
import './button.style.css';

const Button = ({ name, label, ...rest }) => {
	return (
		<button className={`btn ${name}`} {...rest}>
			{label}
		</button>
	);
};

export default Button;
