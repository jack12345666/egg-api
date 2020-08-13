'use strict';

module.exports = {
    dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle
    host: "175.24.36.114",  // 数据库服务器地址
    port: 3306, // 数据库连接端口号
    database: "library", // 数据库名称
    username: "root",   // 数据库登录用户名
    password: "A1030wang*pwd!*.Z",   // 数据库登录密码
    timezone: '+08:00', // 时区 东八区
    underscored: true,// 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
    define: {
        freezeTableName: true, // Model 对应的表名将与model名相同。
        timestamps: false // 默认情况下，Sequelize会将createdAt和updatedAt的属性添加到模型中，以便您可以知道数据库条目何时进入数据库以及何时被更新。
    }
};