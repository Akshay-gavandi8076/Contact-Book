const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (_req, res) => {
	res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (_req, res) => {
	res.send('Add contacts');
});

// @route   POST api/contacts/:id
// @desc    Add new contacts
// @access  Private
router.put('/:id', (_req, res) => {
	res.send('Update contacts');
});

// @route   DALATE api/contacts/:id
// @desc    Delete contacts
// @access  Private
router.delete('/:id', (_req, res) => {
	res.send('Delete contacts');
});

module.exports = router;
