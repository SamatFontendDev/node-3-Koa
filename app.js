const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const koaStatic = require('koa-static');
const session = require('koa-session');
const views = require('koa-views');

const errorHandler = require('./libs/error');
const config = require('./config');
const router = require('./routes');
const port = process.env.PORT || 5000;

app.use(views(__dirname, {
  map: {
    html: 'underscore'
  }
}));

app.use(koaStatic(__dirname));
console.log(__dirname);
app.use(errorHandler);

app.on('error', (err, ctx) => {
  console.log(err);
});


app
  // .use(session(config, app))
  .use(router.routes());
  

app.listen(port, () => {
  if (!fs.existsSync(config.upload)) {
    fs.mkdirSync(config.upload);
  }
  console.log(`> Ready On Server http://localhost:${port}`);
});