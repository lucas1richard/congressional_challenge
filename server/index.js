const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const app = require('./app');

module.exports = app;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('../bundle'));

app.set('port', process.env.PORT || 8899);

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use((req, res) => {
  res.status(404);
  res.send('404');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.send(err);
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
