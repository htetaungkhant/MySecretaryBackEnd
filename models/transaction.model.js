const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const transactionSchema = new Schema({
    fromPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    toPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    transactionType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        maxlength: 5,
        required: true
    },
    detail: {
        type: String,
        trim: true,
        maxlength: 300
    }
},{
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;