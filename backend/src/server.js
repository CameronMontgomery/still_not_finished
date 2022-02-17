const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')
const Article = require('./models/article')

// Routers containing all the routes for users and articles
const userRouter = require('./routes/userRouter')
const articleRouter = require('./routes/articleRouter')

const app = express();
const port = process.env.PORT || 3000;

// Express configuration paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Templating config
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// config static directory
app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRouter)
app.use(articleRouter)


app.get('/', async (req, res) => {
  try {
    const articles = await Article.find({});
    res.render('index', {
      articles
    })
  } catch (e) {
    res.render('index', {
      Error: 'Unable to retrieve articles, try again later.'
    })
  }



})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/help', (req, res) => {
  res.render('help')
})

app.get('/signIn', (req, res) => {
  res.render('signIn')
})

app.get('/signUp', (req, res) => {
  res.render('signUp')
})



app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})