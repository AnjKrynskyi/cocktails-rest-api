const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const paginateData = require('./functions/paginateData');

const PORT = 8081;
const RECIPES = path.resolve(__dirname, 'cocktails', 'recipes.json');
const INGREDIENTS = path.resolve(__dirname, 'cocktails', 'ingredients.json');

// Static directory
app.use(express.static(path.join(__dirname, '../client')));

// Serve client
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// API
app.get('/recipes', (req, res) => {
  const { page } = req.query;
  console.log(page);

  fs.readFile(RECIPES, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    if (page) {
      const chunk = paginateData(JSON.parse(data), +page);
      res.send(chunk);
      return;
    }

    res.send(JSON.parse(data));
  })
});

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));