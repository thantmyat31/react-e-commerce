import React from 'react';
import './wiht-spinner.style.css';
import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props }) => {
	return isLoading ? <Spinner /> : <WrappedComponent {...props} />;
};

export default WithSpinner;
