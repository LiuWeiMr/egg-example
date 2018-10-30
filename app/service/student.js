const Service = require('egg').Service;

class StudentService extends Service {
    async find(sid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const student = await this.ctx.model.Student.find({ sid: sid });
        return { student };
    }
    async create(studentInfo) {
        const student = new this.ctx.model.Student(studentInfo);
        const result = await student.save();
        return { result };
    }
    async update(factors,student) {

        const result = await this.ctx.model.Student.update(factors, {$set: student});
        return { result };
    }
    async delete(student) {

        const result = await this.ctx.model.Student.deleteOne(student);
        return result;
    }
}

module.exports = StudentService;