'use strict';


module.exports = {
    // 默认接口类型
    JsonResult: {
        results: { type: 'string' },     // 服务器返回的数据
        code: { type: 'number' }     // 服务器返回code
    },
    // 默认分页类型
    PageParams: {
        pageIndex: { type: 'integer', min: 1 },
        pageSize: { type: 'integer', min: 2 }
    }
};