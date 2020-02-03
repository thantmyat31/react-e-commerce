import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
	console.log(token);
	alert('Your payment successful');
};

const StripeCheckoutButton = ({ price }) => {
	const checkoutTotal = price * 100;
	const publishableKey = 'pk_test_DIHeHBS9F2lU4AgzZMJSuUxq';

	return (
		<StripeCheckout
			label="Pay Now"
			name="Online Clothing Ltd."
			billingAddress
			shippingAddress
			image="http://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={checkoutTotal}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
