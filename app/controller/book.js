'use strict';

const Controller = require("./baseController");

/**
* @controller BookService 图书接口
*/
class BookController extends Controller {
    /**
    * @summary 根据Id获取图书信息
    * @description 根据Id获取图书信息
    * @router get /book/getBookById
    * @request query integer Id 图书ID
    * @response 200 JsonResult 操作结果
    */
    async getBookById() {
        const { ctx, service } = this;
        const id = ctx.query.Id;
        const result = await service.book.getById(id);
        const newReuslt = ctx.helper.mapperToDto(result, ctx.rule.CreateOrUpdateBookDto);
        this.jsonBody(newReuslt);
    }

    /**
    * @summary 获取所有图书
    * @description 获取所有图书
    * @router get /book/getBooks
    * @request query string name 名称查询
    * @response 200 JsonResult 操作结果
    */
    async getBooks() {
        const { ctx, service } = this;

        const param = ctx.query;
        let whereSql = `b left join bookcategory bc on b.bookcategoryId=bc.Id where b.IsDeleted=0`;
        if (param.Name) whereSql += ` and b.Name like '%${param.Name}%' or b.Author like '%${param.Name}%' or b.MakeSource like '%${param.Name}%'`

        const results = await service.book.getAll(whereSql);
        this.jsonBody(results);
    }

    /**
    * @summary 新增图书
    * @description 新增图书
    * @router put /book/addBook
    * @request body CreateOrUpdateBookDto modal 图书信息
    * @response 200 JsonResult 操作结果
    */
    async addBook() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.CreateOrUpdateBookDto);

        const param = ctx.request.body;
        param.CreatedDate = ctx.helper.getDate();
        const result = await service.book.create(param);
        this.jsonBody(result);
    }

    /**
    * @summary 编辑图书
    * @description 编辑图书
    * @router post /book/editBook
    * @request body CreateOrUpdateBookDto modal 图书信息
    * @response 200 JsonResult 操作结果
    */
    async editBook() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.CreateOrUpdateBookDto);

        const param = ctx.request.body;
        if (!param.Id) ctx.throw(500, '参数错误');
        if (await service.book.isExitByWhere(null, `Id!=${param.Id} and Name='${param.Name}'`)) ctx.throw(500, '书名重复');

        param.UpdatedDate = ctx.helper.getDate();

        const result = await service.book.update(param.Id, param);
        this.jsonBody(result);
    }

    /**
    * @summary 删除图书
    * @description 删除图书
    * @router delete /book/deleteBook
    * @request body DeleteBookBookDto modal 图书ID
    * @response 200 JsonResult 操作结果
    */
    async deleteBook() {
        const { ctx, service } = this;
        const id = ctx.request.body.Id;

        if (!id) ctx.throw(500, '参数错误');

        const result = await service.book.update(id, { IsDeleted: true });
        this.jsonBody(result);
    }

    /**
    * @summary 获取图书分类
    * @description 获取图书分类
    * @router get /book/getBookCategorys
    * @response 200 JsonResult 操作结果
    */
    async getBookCategorys() {
        const { ctx, service } = this;
        const results = await service.book.getAllCategory();
        this.jsonBody(results);
    }
}

module.exports = BookController;