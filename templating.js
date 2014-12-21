'use strict';

var koa = require('koa');
var app = koa();

var views = require('co-views');

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

app.use(function*(next) {
  var user = {
    name: {
      first: 'Tobi',
      last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
  };
  this.body = yield render('user', {user: user});
});

app.listen(process.argv[2]);
