import express from "express";
import axios from "axios";

//create simple express server
const app = express;

//handle json formatted requests to/from server
app.use(express.json);
//handle other data types in body
app.use(express.urlencoded({ extended: true }));
//declare port to run on
const port = 8080;
//!app.get request (todo)
// set server to listen on port
app.listen(port);
//log port is open
console.log(`Listening at http://localhost:${port}`);
