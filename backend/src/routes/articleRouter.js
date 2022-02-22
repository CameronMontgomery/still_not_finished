const express = require('express');
const Article = require('../models/article');
const router = new express.Router()



router.get('/new', async (req, res) => {
  res.render('new')
})

router.get('articles/featured', async (req, res) => {
  const featuredArticles = await Article.find({featured: true});

  res.send(featuredArticles)
})

router.post('/articles/new', async (req, res) => {
  const article = new Article(req.body);

  try {
    await article.save();
    res.status(200).render('new');
  } catch (e) {
    res.status(400).send(e);
  }
})

module.exports = router;

