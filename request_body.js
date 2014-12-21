'use strict';

var koa = require('koa');
var parse = require('co-body');

var app = koa();

app.use(function*(next) {
  if (this.method !== 'POST' && this.path !== '/')
    return yield next;

  var body = yield parse(this);
  this.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);

