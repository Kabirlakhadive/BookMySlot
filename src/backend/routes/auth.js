const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Example: Verifying a user token (adjust based on needs)
        const user = await admin.auth().getUserByEmail(email);
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

module.exports = router;
