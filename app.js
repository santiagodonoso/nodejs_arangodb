const express = require('express')
const app = express()
// const PORT = process.env.PORT || 3000
const PORT = 80

app.get('/', (req, res) => {
  res.send('Hello, Dockerxccc')
})

app.listen(80, () => {
  console.log(`Server running on port ${PORT}`)
})