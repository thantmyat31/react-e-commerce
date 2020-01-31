import React from 'react';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selector';
import { connect } from 'react-redux';

import './checkout-table.style.css';
import CheckOutTableRow from '../checkout-table-row/checkout-table-row.component';

const CheckOutTable = ({ cartItems, cartTotal }) => {
	return (
		<div className="table-responsive">
			<table className="checkout-table">
				<thead>
					<tr>
						<th>Product</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>{cartItems.map((item) => <CheckOutTableRow key={item.id} item={item} />)}</tbody>
				<tfoot>
					<tr>
						<td colSpan="5">
							<p className="total">Total: ${cartTotal}</p>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutTable);
