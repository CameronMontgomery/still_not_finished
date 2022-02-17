const express = require('express');
const Article = require('../models/article');
const router = new express.Router()

router.get('/new', async (req, res) => {
  res.render('new')
})


module.exports = router;