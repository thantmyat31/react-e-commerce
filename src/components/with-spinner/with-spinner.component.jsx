import React from 'react';
import './wiht-spinner.style.css';

const WithSpinner = (WrappedComponent) => {
	const spinner = ({ isLoading, ...props }) => {
		return isLoading ? <div className="spinner-container" /> : <WrappedComponent {...props} />;
	};

	return spinner;
};

export default WithSpinner;
