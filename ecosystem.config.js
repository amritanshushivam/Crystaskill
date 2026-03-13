// PM2 Ecosystem Configuration for CrystaSkill Production Deployment
// Usage:  pm2 start ecosystem.config.js
// Docs:   https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'crystaskill-frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 9002',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        PORT: 9002,
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      log_file: './logs/frontend.log',
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      time: true,
    },
    {
      name: 'crystaskill-backend',
      script: 'backend/server.js',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '256M',
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      log_file: './logs/backend.log',
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      time: true,
    },
  ],
};
