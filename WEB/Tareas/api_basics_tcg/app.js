"use strict"

import express from 'express';

const port = 5000;
const app = express();
let cards = [
{
  id: 1,  
  name: "Goblin",
  type: "Creature",
  rarity: "Common",
  cost: 1,
},
{
  id: 2,
  name: "Black Lotus",
  type: "Artifact",
  rarity: "Rare",
  cost: 2,
},

];

app.use(express.json());

app.get('/cards', (req, res) => {
  if (cards.length === 0) {
    res.status(404).json({ message: "No hay cartas." });
  } else {
    res.json(cards);
  }
});

app.get('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: "La carta no existe." });
  }
});

app.post('/cards', (req, res) => {
  const newCard = req.body;
  if (newCard.id && !cards.find(c => c.id === newCard.id)) {
    cards.push(newCard);
    res.status(201).json({ message: "La carta ha sido agregada." });
  } else {
    res.status(400).json({ message: "No se pudo agregar la carta." });
  }
});

app.delete('/cards/:id', (req, res) => {
  const cardIndex = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (cardIndex > -1) {
    cards.splice(cardIndex, 1);
    res.json({ message: "La carta ha sido eliminada." });
  } else {
    res.status(404).json({ message: "La carta no existe." });
  }
});


app.put('/cards/:id', (req, res) => {
  const cardIndex = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (cardIndex > -1) {
    cards[cardIndex] = { ...cards[cardIndex], ...req.body };
    res.json({ message: "La carta ha sido actualizada." });
  } else {
    res.status(404).json({ message: "La carta no existe." });
  }
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});