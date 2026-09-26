const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/create-order', (req, res) => {
    const { amount } = req.body;
    
    if (!amount) {
        return res.status(400).json({ success: false, message: "Amount is required" });
    }

    res.status(200).json({
        success: true,
        message: "Order initialized on backend",
        amount: amount,
        orderId: "ORDER_" + Math.random().toString(36).substr(2, 9).toUpperCase()
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
});