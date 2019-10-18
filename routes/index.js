const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body')

const controllers = require('../controllers');

router.get('/', controllers.index);
router.get('/admin', controllers.admin);
router.get('/login', controllers.login);

module.exports = router;