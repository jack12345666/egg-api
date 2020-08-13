'use strict';

const databaseconfig = require("./core/database.config.prod");
const swaggerdoc = require("./core/swagger.config");

// 配置项目唯一的标识
exports.keys = "egg.api";

// egg-swagger-doc 配置信息
exports.swaggerdoc = swaggerdoc;

// 数据库配置
exports.sequelize = databaseconfig;

// 跨域配置
exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
};