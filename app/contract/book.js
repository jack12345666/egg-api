'use strict';

module.exports = {
    // 新增会员模型
    CreateOrUpdateBookDto: {
        Id: { type: 'integer', required: false },
        Name: { type: 'string', required: true },   // 名称
        Price: { type: 'string', required: true },   // 单价
        Author: { type: 'string', required: true },   // 作者
        MakeSource: { type: 'string', required: true },   // 出版社
        BookCategoryId: { type: 'integer', required: true },   // 分类ID
        Inventory: { type: 'integer', required: true },   // 库存
        IsSoldOut: { type: 'boolean', required: true }   // 下架
    },
    DeleteBookBookDto: {
        Id: { type: 'integer', required: true },    // ID
    }
};