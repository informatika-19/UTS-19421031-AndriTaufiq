const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/uts', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('connection successful')
}).catch((e) => {
    console.log(e)
    console.log('connection failed')
})
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))



app.use('/sepatu/',require('./routes/sepatu'))

app.listen(3000,() => {
    console.log('Server Started')
})