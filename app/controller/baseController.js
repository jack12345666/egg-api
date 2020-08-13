'use strict';

const { Controller } = require("egg");

class BaseController extends Controller {
    /**
     * 返回Json格式响应数据
     * @param {*} data 数据体
     */
    jsonBody(data) {
        let code = null
        code = data ? 0 : -1
        this.ctx.body = {
            results: data,
            code
        };
    }
};

module.exports = BaseController;