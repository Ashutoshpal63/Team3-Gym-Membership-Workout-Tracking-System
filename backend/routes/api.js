const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const subscriptionController = require('../controllers/subscriptionController');

// Auth Routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', auth, authController.getCurrentUser);

// Admin Routes
router.post('/equipment', auth, adminController.addEquipment);
router.get('/equipment', auth, adminController.getEquipment);
router.get('/users', auth, adminController.getUsers);

// Subscription Routes
router.post('/subscription', auth, subscriptionController.createSubscription);
router.get('/subscription', auth, subscriptionController.getSubscriptions);

module.exports = router;