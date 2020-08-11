const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const paginateData = require('../functions/paginateData');
const sliceObject = require('../functions/sliceObject');

const RECIPES = path.join(__dirname, '../cocktails', 'recipes.json');
const INGREDIENTS = path.join(__dirname, '../cocktails', 'ingredients.json');

router.get('/recipes', (req, res) => {
  const { page } = req.query;

  fs.readFile(RECIPES, 'utf8', (err, data) => {
    const raw = JSON.parse(data);

    if (err) {
      console.log(err);
      return;
    }

    if (page) {
      const chunk = paginateData(raw, +page);
      res.send(chunk);
      return;
    }

    res.send(raw);
  });
});

router.get('/ingredients', (req, res) => {
  const { page } = req.query;

  fs.readFile(INGREDIENTS, 'utf8', (err, data) => {
    const raw = JSON.parse(data);

    if (err) {
      console.log(err);
      return;
    }

    if (page) {
      const chunk = sliceObject(raw, +page);
      res.send(chunk);
      return;
    }

    res.send(raw);
  });
});

module.exports = router;