const Service = require('egg').Service;

class Commodity extends Service {
    async find(cid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const commodity = await this.app.memcached.loadFromCache(cid);
        return { commodity };
    }
    async create(commodity) {
        const result = await this.app.memcached.saveToCache (commodity.cid, commodity.value);
        return { result };
    }
    async delete(cid) {

        const result = await this.app.memcached.destroyCache(cid);
        return result;
    }
}

module.exports = Commodity;
