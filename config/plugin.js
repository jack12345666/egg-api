'use strict';


// 配置 egg-swagger-doc 插件信息
module.exports.swaggerdoc = {
    enable: true,   // 启用 swagger-ui 默认启用
    package: 'egg-swagger-doc', // 指定 swagger 包名称
};

// 配置 egg-sequelize 插件信息
exports.sequelize = {
    enable: true, // 启用 sequelize 默认启用
    package: 'egg-sequelize', // 指定 egg-sequelize 包名称
};

// 配置 egg-validate 参数验证
exports.validate = {
    enable: true,    // 启用 参数验证 默认启用
    package: 'egg-validate',    // 指定 egg-validate 包名称
};

// 配置 egg-cors 跨域
exports.cors= {
    enable: true,
    package: 'egg-cors'
};