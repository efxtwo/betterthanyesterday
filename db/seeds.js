const Bty = require('../models/bty-models');

const seedData = require('./seeds.json');

Bty.deleteMany({})
    .then(() => {
       Bty.insertMany(seedData)
        .then(console.log)
        .catch(console.error)
        .finally(() => {
            process.exit();
        })
    })