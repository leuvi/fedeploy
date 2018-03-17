const path = require('path')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const statics = require('koa-static')
const Router = require('koa-router')
const router = new Router()

//dist构建目录作为静态目录
app.use(statics(path.resolve('dist')))

//dist构建目录作为模板目录
app.use(views(path.resolve('dist')))
router.get('*', async(ctx, next) => {
  if(ctx.url !== '/favicon.ico') {
    await ctx.render('index')
  }
})
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(1314)

