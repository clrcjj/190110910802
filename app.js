const express = require("express")
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose');
const e = require("express");
mongoose.connect('mongodb://172.0.0.1:27017/190110910802');
app.use('/',express.static('logo'))
app.use('/',express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const schema={
    admin:String,
    password:String
}
const schema1={
    name:String,
    major:String,
    grade:String,
    start:String,
    app:String,
    hour:String,
    date:String
}
const schema2={
    username:String,
    password:String,
    sex:String,
    birth:String,
    spec:String,
    reg_time:String,
    status:String
}
