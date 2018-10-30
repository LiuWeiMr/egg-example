
const Controller = require('egg').Controller;


class ComputerController extends Controller {
    async info() {
        const ctx = this.ctx;
        const cLogo = ctx.params.cLogo;
        const computer = await ctx.service.computer.find(cLogo);
        ctx.body = computer;
    }
    async create() {
        const ctx = this.ctx;
        console.log(ctx.request.body);
        const insertSuccess = await ctx.service.computer.create(ctx.request.body);
        ctx.body = insertSuccess;
    }
    async delete() {
        const ctx = this.ctx;
        const insertSuccess = await ctx.service.computer.delete(ctx.params.cLogo);
        ctx.body = insertSuccess;
    }
}

module.exports = ComputerController;