const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//define path for express config
const htmlIndexPage = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

//setUp handlebars views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



//setup static directory to serve
app.use(express.static(htmlIndexPage))



app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name:'Rameen Sher'
  })
})

app.get('/aboutUs', (req, res) => {
  res.render('aboutUs', {
    title: 'Sex with sahar is delicious'
  })
})

app.get('/help', (req, res) => {
     res.render('help', {
       title: 'help me Rameen is fucking me hardly',
     })
})

app.get('/help/*', (req, res) => {
   res.send('help article not found')
})



app.get('/weather', (req, res) => {
  if(!req.query.address)
  {
   return res.send({
      error: 'please enter the address'
    })
  }
  res.send({
    forecase: 'It is snowing',
    location: 'Philadephilia',
    address: req.query.address
  })
})

app.get('/products', (req, res) =>{
  if(!req.query.search)
  {
    return res.send({
      error: 'you must provide search'
    })
  }
  res.send({
    products: []
  })
})

app.listen(3000, () => {
  console.log('server is up on the port 3000')
})
