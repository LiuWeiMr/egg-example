const Controller = require('egg').Controller;


class CommodityController extends Controller {
    async info() {
        const ctx = this.ctx;
        const cid = ctx.params.cid;
        const computer = await ctx.service.commodity.find(cid);
        ctx.body = computer;
    }
    async create() {
        const ctx = this.ctx;
        console.log(ctx.request.body);
        const insertSuccess = await ctx.service.commodity.create(ctx.request.body);
        ctx.body = insertSuccess;
    }
    async delete() {
        const ctx = this.ctx;
        const insertSuccess = await ctx.service.commodity.delete(ctx.params.cid);
        ctx.body = insertSuccess;
    }
}

module.exports = CommodityController;
