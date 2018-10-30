const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('users', { id: uid });
        // const user = await this.app.kafka.get('users', { id: uid });

        console.log(user,uid);
        return { user };
    }
    async create(userInfo) {
        const result = await this.app.mysql.insert('users', userInfo);
        const insertSuccess = result.affectedRows === 1;
        return { insertSuccess:insertSuccess };
    }
    async update(userInfo) {

        const result = await this.app.mysql.update('users', userInfo);
        const insertSuccess = result.affectedRows === 1;
        return { insertSuccess:insertSuccess };
    }
    async delete(userInfo) {

        const result = await this.app.mysql.delete('users', userInfo);
        return result;
    }
}

module.exports = UserService;