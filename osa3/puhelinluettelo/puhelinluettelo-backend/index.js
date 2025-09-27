const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use(express.static('dist'))

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  { id: 1, name: 'Arto Hellas', number: '040-123456' },
  { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
  { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
  { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
]

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const exists = persons.some(p => p.id === id)
  if (exists) {
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
  } else {
    response.status(404).json({ error: 'person not found' })
  }
})

app.post('/api/persons', (request, response) => {
  console.log(request.body) 
  const { name, number } = request.body
  if (!name || !number) {
    return response.status(400).json({ error: 'name or number missing' })
  }
  const nameExists = persons.some(p => p.name === name)
  if (nameExists) {
    return response.status(400).json({ error: 'name must be unique' })
  }
  const id = Math.floor(Math.random() * 1000000)
  const newPerson = { id, name, number }
  persons = persons.concat(newPerson)
  response.status(201).json(newPerson)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
