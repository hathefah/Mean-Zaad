const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const config = require('./config/database');
mongoose.promise = global.promise;
mongoose.connect(config.uri ,(err)=>{
  if(err){
    console.log('con not connect to database:', err);
  }else{
    console.log('connected to database:', config.db);
  }
});

app.use(express.static(__dirname +'/client/dist'));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080,()=>{
  console.log("llstening on port 8080");
});
