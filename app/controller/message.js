const Controller = require('egg').Controller;


class MSGController extends Controller {
    async find() {
        // const ctx = this.ctx;
        // const userId = ctx.params.id;
        // const user = await ctx.service.user.find(userId);
        // ctx.body = user;
        const result = await this.app.kafka.kafka1.send('dblab', 'key1', 'message');
        console.log(result, '>>>>');
        this.ctx.body = 'hi, ' + this.app.plugins.kafkajs2.name;
    }
    // async create() {
    //     const ctx = this.ctx;
    //     console.log(ctx.request.body);
    //     const insertSuccess = await ctx.service.user.create(ctx.request.body);
    //     ctx.body = insertSuccess;
    // }
    // async update() {
    //     const ctx = this.ctx;
    //     const userInfo = Object.assign(ctx.request.body, {id: parseInt(ctx.params.id)});
    //     const insertSuccess = await ctx.service.user.update(userInfo);
    //     ctx.body = insertSuccess;
    // }
    // async delete() {
    //     const ctx = this.ctx;
    //     const userInfo = Object.assign({id: parseInt(ctx.params.id)});
    //     const insertSuccess = await ctx.service.user.delete(userInfo);
    //     ctx.body = insertSuccess;
    // }
}

module.exports = MSGController;