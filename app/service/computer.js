
const Service = require('egg').Service;

class ComputerService extends Service {
    async find(cLogo) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const computer = await this.app.redis.get(cLogo);
        return { computer };
    }
    async create(computerInfo) {
        const result = await this.app.redis.set(computerInfo.name, computerInfo.value);
        return { result };
    }
    async delete(cLogo) {

        const result = await this.app.redis.del(cLogo);
        return result;
    }
}

module.exports = ComputerService;