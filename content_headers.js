'use strict';

var koa = require('koa');

var app = koa();

app.use(function*(next) {
  if (this.request.is('application/json')) {
    this.body = {
      message: 'hi!'
    };
  } else {
    this.body = 'ok';
  }
});

app.listen(process.argv[2]);
