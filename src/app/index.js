const Koa = require('koa')
const { koaBody } = require('koa-body')

const routes = require('../router')	// 只需要引入一个模块即可

const app = new Koa()

app.use(koaBody())	// 注册koa-body中间件
app.use(routes)	    // 一次性全部导入


module.exports = app