'use strict';

var koa = require('koa');
var app = koa();

app.keys = ['secret'];

app.use(function*(next) {
  if (this.path !== '/') {
    return yield next;
  }

  var count = this.cookies.get('view', {signed: true});
  if (isNaN(count)) {
    count = 0;
  }
  count++;

  this.body = "" + count + " views";

  this.cookies.set('view', count, {signed: true});
});

app.listen(process.argv[2]);
