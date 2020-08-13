'use strict';

const Controller = require("./baseController");

/**
* @controller MemberService 会员接口
*/
class MemberController extends Controller {
   /**
    * @summary 查询会员
    * @description 查询会员
    * @router get /member/selectMember
    * @request query integer id 会员ID
    * @response 200 JsonResult 操作结果
    */

    async selectMember() {
        const { ctx, service } = this;
        
        const id = ctx.query.id;
        const result = await service.member.getById(id);
        this.jsonBody(result);
    }
}

module.exports = MemberController;