const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')

//const userRouter = require('./routes/userRouter')

const app = express();
const port = process.env.PORT || 3000;

// Express configuration paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')


app.set('view engine', 'hbs')
app.set('views', viewsPath)


// config static directory
app.use(express.static(publicDirectoryPath))

app.use(express.json())
//app.use(userRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})