const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body')

const controllers = require('../controllers');

router.get('/', controllers.index);
router.get('/admin', controllers.admin);
router.get('/login', controllers.login);

router.post('/admin/upload', koaBody({
    multipart: true,
    formidable: {
        uploadDir: process.cwd() + '/public/upload'
    }
}), controllers.adminUpload);

router.post('/admin/skills', koaBody(), controllers.adminSkills);
router.post('/login', koaBody(), controllers.user);
router.post('/', koaBody(), controllers.main);

module.exports = router;