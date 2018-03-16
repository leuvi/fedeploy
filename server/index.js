const path =require('path')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const static = require('koa-static')
const Router = require('koa-router')
const router = new Router()

//dist构建目录作为静态目录
app.use(static(path.resolve('dist')))

//dist构建目录作为模板目录
app.use(views(path.resolve('dist'), {
  extension: 'html'
}))
router.get('*', async(ctx, next) => {
  await ctx.render('index')
})
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(1314)

