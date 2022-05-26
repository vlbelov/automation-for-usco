const config = require('./wdio.conf').config;

config.specs = [
    './tests/specs/smoke/*.js'
];

exports.config = config;