// Requiring dependancies

const express = require('express')
const app = express()
const cors = require ('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const PORT = 8700

// declaring variables globally
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'inspirational-quote',
    collection
    

// connecting to MongoDB
MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('quotes')
    })
   

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


// Listening to Port
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
}) 