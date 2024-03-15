const express = require('express')
const app = express()
const http = require('http');
// const PORT = process.env.PORT || 3000
const PORT = 80
const multer = require("multer")
const upload = multer()
const axios = require("axios")
const x = require("./x")


const db = axios.create({
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
  httpAgent: new http.Agent({ keepAlive: true }),
});

// ##############################
const show_data = function(req, res, next){
  console.log("##############################")
  x.show()
  res.write("show_data")
  next()
}

// ##############################
app.get('/', (req, res) => {
  res.send('API')
})

// ##############################
app.post( "/users", upload.none(), show_data, (req, res) => {
  // res.send()
  // const user_name = req.body.user_name
  setTimeout(async function(){
      x.show()
      res.write("xxx")
      res.end()
    }, 10)
})

// ##############################
app.get("/users/:id", (req, res) => {
  q = {"query":"FOR user IN users RETURN user"}
  db.post('http://arangodb:8529/_api/cursor', q)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });  
  res.send("x")
})

// ##############################
app.listen(80, () => {
  console.log(`Server running on port ${PORT}`)
})