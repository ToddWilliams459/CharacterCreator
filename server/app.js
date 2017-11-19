const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const router = require('./router.js');

const app = express();

router(app);

app.use('/assets', express.static(path.resolve(`${__dirname}/../client`)));
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on ${port}`);
});
