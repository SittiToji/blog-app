const express = require('express');
const path = require('path');
const app = express();
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});