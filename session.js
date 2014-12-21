'use strict';

var koa = require('koa');
var session = require('koa-session');
var app = koa();

app.keys = ['secrets'];

app.use(session(app));

app.use(function*(){
  if (isNaN(this.session.views))
    this.session.views = 0;
  this.session.views++;
  this.body = this.session.views + " views";
});

app.listen(process.argv[2]);
