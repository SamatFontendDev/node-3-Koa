const db = require('../models/db')
const fs = require('fs')
const path = require('path')


module.exports.admin = async(ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join( 'public/admin.html'));
}
module.exports.index = async(ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join( 'public/index.html'));
}

module.exports.login = async(ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join( 'public/login.html'));
}

module.exports.adminUpload = async (ctx, next) => {
    const {name, price} = ctx.request.body;
    console.log(22,ctx.request.body.photo)
    const img = ctx.request.body.photo;

    let file = path.join(process.cwd(), 'public', 'upload', img);

    db
        .get('works')
        .push({
            name: name,
            price: price,
            picture: path.join('upload', img)
        })
        .write()

    ctx.body = {
        mes: 'Товар загружен',
        status: 'OK'
    }
}

module.exports.adminSkills = async (ctx, next) => {
    const {age, concerts, cities, years} = ctx.request.body;
    const skills = ctx.request.body;
    
    db.set('skills', skills)
    .write()

    ctx.body = {
        mes: 'ок',
        status: 'OK'
    }
}
module.exports.user = async (ctx, next) => {
    const user = ctx.request.body;
    
    db.set('user', user)
    .write()

    ctx.body = {
        mes: 'ок',
        status: 'OK'
    }
}

module.exports.main = async (ctx, next) => {
    const main = ctx.request.body;
    
    db.set('main', main)
    .write()

    ctx.body = {
        mes: 'ок',
        status: 'OK'
    }
}