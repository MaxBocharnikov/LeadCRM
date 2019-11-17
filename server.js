const cookieSession = require('cookie-session');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const port = 5000;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'origin,X-Requested-With,accept,content-type,authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// Add post data to req.body
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method + ', url: ' + req.url);
  next();
});

app.use('', require('./modules/auth'));
app.use('/leads', require('./modules/leads'));
app.use('/workers', require('./modules/workers'));
app.use('/sources', require('./modules/sources'));
app.use('/statuses', require('./modules/statuses'));

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  console.error('Internal error(%d): %s', res.statusCode, err.message)
  res.send(err.message)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});