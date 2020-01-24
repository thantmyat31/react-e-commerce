import React from 'react';
import './input.style.css';

const Input = ({ formType, name, label, value, ...rest }) => {
	return (
		<div className="input-group">
			<input
				className={`input input-renew ${value.length > 0 ? 'input-color' : ''}`}
				id={`${formType}-${name}`}
				name={name}
				value={value}
				{...rest}
			/>
			{label ? (
				<label htmlFor={`${formType}-${name}`} className={`label ${value.length > 0 ? 'shrink' : null}`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default Input;
