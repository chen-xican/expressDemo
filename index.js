const express =require('express');
const app =express();
const router = require('./router');
const template = require('art-template');
const bodyParser = require('body-parser')
 
const path = require('path')


app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'art') 

app.engine('art', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router)

app.listen(3000,()=>{
    console.log('running...')
})