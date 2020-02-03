import React from 'react';

import Button from '../../components/button/button.component';
import './checkout-page.style.css';
import CheckOutTable from '../../components/checkout-table/checkout-table.component';

const CheckOutPage = () => {
	return (
		<div className="checkout-page">
			<CheckOutTable />
		</div>
	);
};

export default CheckOutPage;
