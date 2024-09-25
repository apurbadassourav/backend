const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://dasapurbasourav:yB1GXuv5YJ3JHoKP@mernpro.htb1n.mongodb.net/username?retryWrites=true&w=majority&appName=mernpro')
  .then(() => console.log('Connected!'));

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user', (req, res) => {
    
    
  const{firstname,lastname,email,password}= req.body
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})