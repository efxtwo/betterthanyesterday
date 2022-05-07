const mongoose = require('../db/connection');

const btySchema = new mongoose.Schema({
    workoutType: {type: String, required: true},
    date: {type: String},
    weight: {type: Number},
    workoutList: {type: String},
    notes: {type: String}
},
    {timestamps: true}
);

const Bty = mongoose.model('Bty', btySchema);

module.exports = Bty;