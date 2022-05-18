const express = require('express')
const mongoose = require('mongoose')
const app = express()
var cors = require('cors')
app.use(cors(({origin: true})))
app.use(express.json())
require('./routes/routes')(app)

//connection local-port
const port = process.env.PORT || 3005
app.listen(port, () => console.log('listening to the port:' + port));
//  const db =  "mongodb+srv://DevEmpleoEfectivo:Empleo123*@devempleoefectivo.2phx2.mongodb.net/empleo_dev?retryWrites=true&w=majority"
const db = 'mongodb://localhost:27017/imprecolors'

mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('Connected to the database'))
    .catch(() => console.log('Mongo db connection failed'))