require("dotenv").config();

const express = require("express");
const app = express();
const mongoose =require("mongoose");
require("./db/connection.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require('./routes/router.js');

const port = process.env.PORT || 8080;

app.listen(port ,()=>{
    console.log(`server is listening on port : ${port}`);
})

const baseUrl = process.env.FRONTENDURL || 'http://localhost:4200';

app.use(cors({
    origin: baseUrl,
    credentials : true,
    
}));
app.use(cookieParser());
app.use(express.json());
app.use(routes);
// app.use(express.static('client'));


