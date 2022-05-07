const express = require('express');
const router = express.Router();
const Bty = require('../models/bty-models');

router.get('/', (req, res, next) => {
    Bty.find({})
     .then(btys => {
         res.render('index', {btys});
     })
     .catch(next);
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.get('/:id', (req, res) => {
    Bty.findById(req.params.id)
    .then(btys =>
        res.render('show', {btys}))
})

router.get('/:id/edit', (req, res, next) => {
    Bty.findById(req.params.id)
    .then((btys) => {
        res.render('edit', {btys});
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Bty.create(req.body)
      .then(btys => res.redirect('/bty'))
      .catch(next)
  });

  router.put('/:id', (req, res) => {

    Bty.findOneAndUpdate(
        {_id: req.params.id},
        {
            date: req.body.date,
            workoutType: req.body.workoutType,
            weight: req.body.weight,
            workoutList: req.body.workoutList,
            notes: req.body.notes
        }, 
        {new: true}
        )
        .then(btys => {
            res.render('show', {btys})
        })
        .catch(console.error);
});


  router.delete('/:id', (req, res) => {
    Bty.findOneAndRemove(
    {_id: req.params.id},
    )
    .then( () => res.redirect('/bty'))
    .catch(err => res.send(err))
})

module.exports = router;