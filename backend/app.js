const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

// Db  connection 
const conn = require('./db/conn')
conn();

// Routes

const routes = require("./routes/router")

app.use("/api", routes);




app.listen(3000, function () {
    console.log('servidor Online !');
});
// senha: mongoose: 3CWntITTtT30rDjr

