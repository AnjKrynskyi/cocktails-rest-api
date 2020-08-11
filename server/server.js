const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const handleErrors = require('./functions/handleErrors');

const PORT = process.env.PORT || 8081;

// View engine
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

// Static directory
app.use(express.static(path.resolve(__dirname, 'static')));

// Home page
app.get('/', (req, res) => {
  res.render('home', { url: req.protocol + '://' + req.get('host') + req.originalUrl });
});

// API
app.use('/api', apiRoutes);

// Errors handler
app.use(handleErrors);

app.listen(PORT, () => console.log(`Server started on port:${PORT}`));