const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

// Route to fetch FAQs
router.get('/', faqController.getFaqs);

module.exports = router;
