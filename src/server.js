import http from 'node:http'
import { json } from './middlewares/json.js'

// Create a server that listens on port 3333

// GET /users - List all users
// POST /users - Create a new user
// PUT /users/:id - Update a user
// PATCH /users/:id - Update a user
// DELETE /users/:id - Delete a user

// Cabeçalhos ( requisição e resposta) => Metadados

// HTTP Status Code

const users = []

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  if (method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body

    users.push({
      id: 1,
      name,
      email,
    })
    return response.writeHead(201).end()
  }

  return response.writeHead(404).end('Not found')
})

server.listen(3333)
