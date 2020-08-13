'use strict';

const Service = require("./baseService");

class AdminService extends Service {
    constructor(ctx) {
        super(ctx, "admin");  // 调用父类的构造方法
    }

    /**
     * 获取所有管理员
     * @param {*} whereSql where条件
     */
    async getAll(whereSql) {
        whereSql = whereSql || ' 1=1 ';
        
        const { ctx } = this;
        const [results] = await ctx.model.query(`select Id,Name,Age, DATE_FORMAT(CreatedDate,'%Y-%m-%d %H:%i:%s') CreatedDate from ${this.tableName} where ${whereSql};`);
        return results;
    }

    /**
     * 根据任何条件获取一条记录
     * @param {*} whereSql 
     */
    async getSingleByWhere(columns, whereSql) {
        const { ctx } = this;
        columns = columns || `Id, Name, Age, DATE_FORMAT(CreatedDate,'%Y-%m-%d %H:%i:%s') CreatedDate`;
        if (!whereSql) ctx.throw(500, '参数错误');

        const [results] = await ctx.model.query(`select ${columns} from ${this.tableName} where ${whereSql};`);
        return results[0];
    }

    /**
     * 查询是否存在数据
     * @param {*} whereSql 
     */
    async isExitByWhere(columns, whereSql) {
        const entity = await this.getSingleByWhere(columns, whereSql);
        return Boolean(entity);
    }
}

module.exports = AdminService;