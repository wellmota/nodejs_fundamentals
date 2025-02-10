import http from 'node:http'

// Create a server that listens on port 3333

// GET /users - List all users
// POST /users - Create a new user
// PUT /users/:id - Update a user
// PATCH /users/:id - Update a user
// DELETE /users/:id - Delete a user

// Cabeçalhos ( requisição e resposta) => Metadados


// HTTP Status Code



const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/users') {
    return response
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {

    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@email.com',
    })
    return response.writeHead(201).end()
  }

  return response.writeHead(404).end("Not found")
})

server.listen(3333)
