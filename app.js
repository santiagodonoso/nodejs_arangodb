const express = require('express')
const app = express()
// const PORT = process.env.PORT || 3000
const PORT = 80
const multer = require("multer")
const upload = multer()

const x = require("./x")

const show_data = function(req, res, next){
  console.log("##############################")
  x.show()
  res.write("show_data")
  next()
}


app.get('/', (req, res) => {
  res.send('API')
})

app.post( "/users", upload.none(), show_data, (req, res) => {
  // res.send()
  // const user_name = req.body.user_name
  setTimeout(async function(){
      x.show()
      res.write("xxx")
      res.end()
    }, 10)
})

app.listen(80, () => {
  console.log(`Server running on port ${PORT}`)
})