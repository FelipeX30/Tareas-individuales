"use strict"

import express from 'express';
import fs from 'fs';

const port = 5000;

const app = express();

let cards = [];

app.use(express.json())

app.use(express.static('public'));

app.get("/", (req, res)=>{
    const file = fs.readFileSync('public/html/hello.html', 'utf-8');
    res.status(200).send(file);
})

app.get("/hello", (req, res)=>{
    const salute = "Hello from server";
    res.status(200).send(salute);
});

app.get("/hello/:name", (req, res)=>{
    console.log(req.params)
    const salute = `Hello ${req.params.name}!!`
    res.status(200).send(salute)
});

app.post('/cards', (req, res)=>{
    console.log(req.body)
    res.status(200).send("Card added successfuly")
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
}); 