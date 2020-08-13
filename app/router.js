'use strict';

module.exports = app => {
    app.router.redirect('/', '/swagger-ui.html', 302);   // 配置 swagger 默认首页
};