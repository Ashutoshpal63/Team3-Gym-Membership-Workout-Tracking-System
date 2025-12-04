const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
    const { plan, endDate } = req.body;

    try {
        const newSubscription = new Subscription({
            user: req.user.id,
            plan,
            endDate
        });

        const subscription = await newSubscription.save();
        res.json(subscription);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ user: req.user.id });
        res.json(subscriptions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};