var koa = require('koa');
var app = koa();

var port = process.argv[2];

app.use(function*() {
  this.body = 'hello koa';
});

app.listen(port);
