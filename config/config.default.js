'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540532453339_5772';
  config.env = "local";

  // add your config here
  config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    }
    config.middleware = [
        'robot'
    ];
    config.robot =  {
        ua: [
            /curl/i,
            /Baiduspider/i,
        ],
    };
    config.mysql = {
        client: {
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

        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };
    config.security = {
            csrf: {
                enable: false,
            }
        };
    config.redis = {
        client: {
            port: 6379,          // Redis port
            host: '192.168.2.115',   // Redis host
            password: 'auth',
            db: 0,
        },
    }
    config.memcached = {
        "client": {
            "hosts": ['192.168.2.115:11211'],  // The memcached cluster list.
        }
    };
    config.mongoose = {
        client: {
            url: 'mongodb://192.168.2.115:27017/example',
            options: {},
        },
    };

    // config.kafka = {
    //     kafkaHost:"192.168.2.19:9092,192.168.2.115:9092,192.168.2.74:9092"
    // };

    config.kafka = {
        kafka1: {
            kafkaHost: '192.168.2.19:9092,192.168.2.115:9092,192.168.2.74:9092',
            sub: [{
                groupId: 'consumer-topic1',
                topics: [
                    'dblab',
                ],
                'topic1-KEYS': [
                    'default' // default consumer if you need
                ],
            }],
        }
    };

    config.kafka = {
        kafka1: {
            kafkaHost: '192.168.2.19:2181',
            encoding: 'buffer', // trans binary data
            keyEncoding: 'utf8',
            sub: [{
                groupId: 'consumer-topic1',
                topics: [
                    'dblab',
                ],
                'topic1-KEYS': [
                    'key1',
                ],
            }],
        },
        kafka2: {
            kafkaHost: '192.168.2.19:2181',
            encoding: 'buffer', // trans binary data
            keyEncoding: 'utf8',
            sub: [{
                groupId: 'consumer-topic2',
                topics: [
                    'dblab',
                ],
                'topic1-KEYS': [
                    'key1',
                ],
            }],
        },
    };

    config.keys = '123456';
  return config;
};
