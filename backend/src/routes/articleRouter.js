const express = require('express');
const Article = require('../models/article');
const router = new express.Router()

router.post('/articles', async (req, res) => {
  const article = new Article
})