const express = require('express')
const mongoose = require('mongoose');
const morgan= require('morgan')
const bodyParser=require('body-parser')
const cors = require("cors");

const AuthRoute=require('./routes/auth-route')

mongoose.connect('mongodb://127.0.0.1:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection



db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Bağlantı başarılı')
})

const app=express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended :true}))
app.use(bodyParser.json())

const Port=4000;
app.listen(Port,()=>{
    console.log('server is running')

})
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  }));

app.use('/api',AuthRoute)

// Ticket: ticket ekleme oluşturma,ticketın statusunu değiştirme,ticketa personel atama,ticket label ekleme,Kullanıcı ıd ye göre ticketları çekme
// Message: mesaj ekleme,TicketId'ye göre mesaj çekme,