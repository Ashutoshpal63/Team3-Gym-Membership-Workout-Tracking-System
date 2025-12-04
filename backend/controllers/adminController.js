const Equipment = require('../models/Equipment');
const User = require('../models/User');

exports.addEquipment = async (req, res) => {
    const { name, quantity, status } = req.body;

    try {
        const newEquipment = new Equipment({
            name,
            quantity,
            status
        });

        const equipment = await newEquipment.save();
        res.json(equipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.find() ;
        res.json(equipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error ')
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password') ;
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error') ;
    }
};