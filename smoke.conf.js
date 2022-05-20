const config = require('./wdio.conf').config;

config.specs = [
    './test/specs/smoke/*.js'
];

exports.config = config;