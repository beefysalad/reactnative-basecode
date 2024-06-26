const port = 3000 || process.env.port
const express = require('express')
const app = express()
const cors = require('cors')
const { connect } = require("./configs/db");
const { createUser,login } = require('./service/userService');

console.clear()

app.use(express.json())
app.use(cors())

connect();

app.get('/ping',(req,res)=>{
    res.send('pong')
})


// USER 
app.post('/user/register',createUser)
app.post('/user/login',login)


app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})