'use strict';

var koa = require('koa');
var app = koa();

app.use(errorHandler());

app.use(function*() {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    try {
      yield next;
    } catch (err) {
      this.status = 500;
      this.body = 'internal server error';
    }
  };
}

app.listen(process.argv[2]);
