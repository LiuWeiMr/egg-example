const Controller = require('egg').Controller;


class StudentController extends Controller {
    async info() {
        const ctx = this.ctx;
        const sid = ctx.params.id;
        const student = await ctx.service.student.find(sid);
        ctx.body = student;
    }
    async create() {
        const ctx = this.ctx;
        console.log(ctx.request.body);
        const insertSuccess = await ctx.service.student.create(ctx.request.body);
        ctx.body = insertSuccess;
    }
    async update() {
        const ctx = this.ctx;
        const insertSuccess = await ctx.service.student.update({sid: parseInt(ctx.params.id)},ctx.request.body);
        ctx.body = insertSuccess;
    }
    async delete() {
        const ctx = this.ctx;
        const student = Object.assign({sid: parseInt(ctx.params.id)});
        const insertSuccess = await ctx.service.student.delete(student);
        ctx.body = insertSuccess;
    }
}

module.exports = StudentController;