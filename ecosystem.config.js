module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'fruit',
      script    : './server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '47.104.182.121',
      ref  : 'origin/master',
      repo : 'https://github.com/leuvi/pm2.git',
      path : '/opt/app/fruit',
      'post-deploy' : 'git pull origin master && yarn install && yarn build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
