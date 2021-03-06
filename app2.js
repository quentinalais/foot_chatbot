'use strict'
const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');


const app=express()
app.set('port',(process.env.PORT || 5000))

//Alllows us to process the data 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//ROUTES
app.get('/',function(req,res){
    res.send("Hi I am a chatbot")
})


// Facebook 
app.get('/webhook',function(req,res){
    if(req.query['hub.verify_token']==="blondiebytes"){
        res.send(req.query['hub.challenge'])
    }
    res.send("Wrong token")
})