'use strict';

module.exports = {
    // 新增/编辑会员模型
    CreateOrUpdateMemberDto: {
        Name: { type: 'string', required: true },   // 名称
        Age: { type: 'integer', required: true },   // 年龄
        Sex: { type: 'string', required: true },   // 性别
        AdminId: { type: 'integer', required: true },   // 是否管理员
    }
};