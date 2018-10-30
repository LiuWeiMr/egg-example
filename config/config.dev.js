exports.mysql = {
    clients: {
        // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
        db1: {
            // host
            host: '192.168.2.115',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '123456',
            // 数据库名
            database: 'testAgent',
        },
    },
    // 所有数据库配置的默认值
    default: {

    },

    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};