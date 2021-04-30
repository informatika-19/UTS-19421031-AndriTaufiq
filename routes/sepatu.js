const router = require('express').Router()
const sepatuController = require('../controller/sepatu')

router.post('/create/', (req, res)=> {
    sepatuController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/showalldata/', (req, res)=> {
    sepatuController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/showdatabyid/:id', (req, res)=> {
    sepatuController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/update/:id', (req, res)=> {
    sepatuController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/delete/:id', (req, res)=> {
    sepatuController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router