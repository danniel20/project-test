
const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve('node_modules', 'bootstrap', 'dist')))

app.use(cors())

// Configurações da view com ejs
app.set('views', path.resolve('src', 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

