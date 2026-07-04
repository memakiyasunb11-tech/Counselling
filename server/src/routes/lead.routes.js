const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller');

// Public route to capture lead from website
router.post('/', leadController.createLead);

// Protected route to view leads
router.get('/', leadController.getLeads);

module.exports = router;
