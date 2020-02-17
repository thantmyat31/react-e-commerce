const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build/client')));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'build/client', 'index.html'));
	});
}

app.listen(port, (error) => {
	if (error) throw new error();
	console.log('server is running on ' + port);
});

app.post('/payment', (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd'
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({ error: stripeErr });
		} else {
			res.status(200).send({ success: stripeRes });
		}
	});
});
