'use strict';

module.exports = {
     // 创建用户参数
     createUserReq: {
        phone: {
            type: 'string',
            example: '13723456789',
            format: /^1[34578]\d{9}$/,
            description: '电话',
            required: true
        },
        password: {
            type: 'string',
            example: '密码',
            maxLength:'36',
            required: true
        },
        name: {
            type: 'string',
            example: '姓名',
            maxLength:'10',
            required: true
        },
        sex: {
            type: 'string',
            enum: ['M', 'F'],
            description: '性别 M:男 F:女'
        },
        balance: {
            type: 'number',
            example: 666.66,
            description: '金额'
        }
    }
}