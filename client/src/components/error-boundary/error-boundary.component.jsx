import React from 'react';
import ErrorPage from './../../pages/error-page/error-page';

class ErrorBoundary extends React.Component {
	state = {
		hasErrored: false
	};
	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) return <ErrorPage />;
		return this.props.children;
	}
}

export default ErrorBoundary;
