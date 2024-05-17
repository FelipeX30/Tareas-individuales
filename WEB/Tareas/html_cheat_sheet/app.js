"use strict"

import express from 'express';
import fs from 'fs';

const port = 5000;

const app = express();

let cards = [];

app.use(express.json())

app.use(express.static('public'));

app.get("/web", (req, res)=>{
    const file = fs.readFileSync('public/html/hello.html', 'utf-8');
    res.status(200).send(file);
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
}); 