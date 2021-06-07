const express=require('express')
const morgan = require('morgan')
const app=express()
const cors = require('cors')
const Person = require('./models/person')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));

const  persons= [
  {
    "content": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "content": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "content": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "content": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]
app.get('/persons',(request,response)=>{
    response.json(persons)
})

app.get('/info',(request,response)=>{
  const date=new Date()
  response.send(`<p>PhoneBook has info for ${persons.length} people</p>
                  <p>${date}</p>`)
})
app.get('/persons/:id',(request,response)=>{
  const id=Number(request.params.id)
  const person=persons.find(person=>person.id===id)
  if(person)
  response.json(person)
  else
  response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
})
app.delete('/persons/:id',(request,response)=>{
  const id=Number(request.params.id)
  const pn=persons.length
  const pep=persons.filter(person=>person.id!==id)
  if(pep.length===pn-1)
  response.status(204).json(pep) 
})

app.put('/persons/:id',(request,response)=>{
  if(persons.find(person=>person.content===request.body.content)){
    const personfind = persons.find((person) => person.content.toLowerCase().includes(request.body.content.toLowerCase()))
    const newObject={
      ...personfind,
      "number":request.body.number
    }
   persons.concat(newObject)
   response.status(200).json(newObject)
  }
})

app.post('/persons' , (request,response) => {
  const body = request.body
  if(!body.content){
    response.status(400).send({ error: `${response.statusCode} <br/>name is missing` })
  }
  else if(!body.number){
    response.status(400).send({ error: `${response.statusCode} <br/>number is missing` })
  }
  else if(persons.find(person=>person.content===body.content)){
    response.status(409).send({ error: `${response.statusCode} <br/>name must be unique` })
  }    
  else if(body.content&&body.number)
  {
    body.id = Math.floor(Math.random() *9999999)
    const person={
      "content":body.content,
      "number":body.number,
      "id":body.id
    }
    persons.concat(person)
    response.status(200).json(person)
  }
  else
  {
  return response.status(500).end();
}

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

