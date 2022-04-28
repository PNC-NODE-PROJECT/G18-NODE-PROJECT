const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000,()=>{
    console.log("Qiuz App run on http://localhost:5000");
})

//import model
const taskModel = require('./route/quiz_route');

//Definestatic route
app.use(express.static('public'));


// read 
app.get('/user',(req,res)=>{
    
})

// post 
app.post('/user',(req,res)=>{

})

// delete
app.delete('/user',(req,res)=>{

})

// update quiz app
app.patch('/user',(req,res)=>{

})