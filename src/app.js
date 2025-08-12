const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const postsRouter = require('./routes/posts');
const { version: appVersion } = require('../package.json');

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.locals.env = app.get('env');
app.locals.assetVersion = appVersion;

app.use(compression());
app.use(express.static(path.join(__dirname, '../public'), {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (/\.(?:js|css|png|jpg|jpeg|gif|svg|ico)$/.test(filePath)) {
      if (/\.min\.(?:js|css)$/.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=604800');
      }
    }
  }
}));
app.use(express.urlencoded({ extended: true }));

app.use('/', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});