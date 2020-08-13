'use strict';

const Service = require('./baseService');

class MemberService extends Service {
    constructor(ctx) {
        super(ctx, 'member');
    }
}

module.exports = MemberService;