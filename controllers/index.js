const db = require('../models/db')
const fs = require('fs')
const _path = require('path')

module.exports.admin = async(ctx, next) => {
    ctx.render(path.join(__dirname, '../public/admin.html') );
}
module.exports.index = async(ctx, next) => {
    ctx.render(path.join(__dirname, '../public/index.html') );
}

module.exports.login = async(ctx, next) => {
    ctx.render(path.join(__dirname, '../public/login.html') );
}