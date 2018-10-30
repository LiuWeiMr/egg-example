'use strict';

// had enabled by egg
// exports.static = true;
const path = require('path');

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

exports.redis = {
    enable: true,
    package: 'egg-redis',
};

exports.memcached = {
    enable: true,
    package: 'egg-memcached'
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

exports.kafka = {
    enable: false,
    package: 'egg-kafka',
};

exports.kafkajs2 = {
    enable: false,
    package: 'egg-kafkajs2',
};