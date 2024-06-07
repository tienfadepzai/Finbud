const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema({
    cryptoName: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    change: { type: Number, required: true },
    //lastTradingDay: { type: Date }, // Optional field for the last trading day
    date: { type: Date, default: () => Date.now() }
});

module.exports = mongoose.model('CryptoCurrency', CryptoSchema);
