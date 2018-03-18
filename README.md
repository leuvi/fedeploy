### React前端项目自动化部署方案
> 基于Koa2、React前端项目构建和阿里云服务器自动部署[点我访问](http://fruit.sweetui.com)。

###### 本地开发
```javascript
yarn dev
```

###### 代码构建
```javascript
yarn build
```

###### 首次部署
```javascript
yarn setup
```

###### 提交部署
```javascript
yarn deploy
```

###### Nginx反向代理配置
```javascript
server {
    listen 80;
    server_name fruit.sweetui.com;

    location / {
        proxy_pass http://localhost:1314;
    }
}
```