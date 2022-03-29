const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/web3', express.static(__dirname+'/node_modules/web3/dist'))

app.get('/', (req, res) => {

  res.render('home')

})

app.post('/add', (req, res) => {
    let name = req.body.name
    console.log(name)
    res.redirect('/')
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})