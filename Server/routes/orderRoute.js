const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const stripe = require('stripe')
('sk_test_51LwRWZSG6dv3OaeAceSvr5DirmqvATZemBS2xeZYYJbhMP5Th8vVE3WyKZDj0XMDDy8UBNfxxT9FqDEDtjCiRXgO00d7YbAUo1');


router.post("/recharge_orderZ", async (req, res) => {
    const {token, subTotal, currentUser, cartItem} = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });


        const payment = await stripe.charges.create({
            amount: subTotal * 100,
            currency: "inr",
            // description: "Recharging ....",
            customer: customer.id,
            // receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        });
        if (payment) {
            res.send("Payment successful")
        } else {
            res.send("Payment Failed ")
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({message: "Something went wrong....."})
    }
})

router.post("/recharge_order1", async (req, res) => {
    const {token, subTotal, currentUser, cartItem} = req.body

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: `${cartItem.name}`,
                        },
                        product: cartItem,
                        unit_amount: subTotal * 100,
                    },

                    quantity: 1,

                },

            ],
            mode: 'payment',
            success_url: 'http://localhost:4242/success.html',
            cancel_url: 'http://localhost:4242/cancel.html',
        });

        if (session) {
            console.log("Done..............")
        } else {
            console.log("....Not____Done........")
        }
        res.send("Working fine i think")
    } catch (e) {
        console.log(e)
    }
})

router.post("/recharge_order", async (req, res) => {
    const {token, subTotal, currentUser, cartItem} = req.body
    const custName = currentUser.name
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });

        var paymentIntent = await stripe.paymentIntents.create({

            amount: (subTotal * 100),
            currency: "INR",
            // payment_method_types: ["card"],
            metadata: {custName},
            customer: customer.id,
            payment_method: 'pm_card_visa'
        })

        const clientSecret = paymentIntent.id;
        var paymentIntent = await stripe.paymentIntents.update(
            clientSecret,
            {
                metadata: {
                    order_id: '6735'
                }
            }
        );
        var paymentIntent = await stripe.paymentIntents.confirm(
            clientSecret,
            {
                payment_method:
                    'pm_card_visa',
                receipt_email:
                token.email
            }
        );

        res.status(500).json({message: "payment going", clientSecret})
        if (paymentIntent) {
            console.log("DOne for the day")
        }
    } catch (e) {
        console.log("Failed......")
        console.log(e)
    }
})

module.exports = router