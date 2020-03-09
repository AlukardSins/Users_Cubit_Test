const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const https = require('https')

const app = express()
const port = process.env.PORT || 3000

const redirectedURL = 'https://reqres.in/api/users'

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/users/1', (req, res) => {
  https
    .request(`${redirectedURL}?page=1`, (response) => {
      response.pipe(res).status(200)
    })
    .on('error', function (e) {
      res.sendStatus(500)
    })
    .end()
})

app.get('/users/2', (req, res) => {
  https
    .request(`${redirectedURL}?page=2`, (response) => {
      response.pipe(res).status(200)
    })
    .on('error', function (e) {
      res.sendStatus(500)
    })
    .end()
})

app.get('/user/:id', (req, res) => {
  https
    .request(`${redirectedURL}/${req.params.id}`, (response) => {
      response.pipe(res).status(200)
    })
    .on('error', function (e) {
      res.sendStatus(500)
    })
    .end()
})

app.listen(port, () => console.log(`Redirecting server listening on port ${port}, Redirecting to ${redirectedURL}`))
