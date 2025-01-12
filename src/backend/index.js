const express = require('express');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('./tradewise-6f829-firebase-adminsdk-62k4g-4f831f82b9.json');
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;


const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});