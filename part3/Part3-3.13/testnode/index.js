require('dotenv').config()
const http = require('http')
const express = require('express')
const morgan = require('morgan')
const { json } = require('express')
const cors = require('cors')
const app = express()
const Person = require('./models/person')
app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));
app.use(cors())


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
 
  app.get('/personss', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })

  app.get('/personss/:id', (request, response) => {
    Person.findById(request.params.id).then(persons => {
      response.json(persons)
    })
  })

  app.post('/personss', (request, response) => {
    const body = request.body
    .then(result => {
      console.log('connected to ')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })
  
    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const person = new Person({
      title: body.title,
      content: body.content,
      
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
  })


const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
}

)


  