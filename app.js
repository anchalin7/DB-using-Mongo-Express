const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');
const app=express();


app.use(bodyParser.json());
//Import Routes

const postRoute=require('./routes/posts');
app.use('/posts',postRoute);



//Routes

app.get('/',(req,res)=>{
    res.send("Connected");
});

//Connect DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('Connected to DB'))


app.listen(4000); 