import {Message} from 'iview';
import axios from 'axios';
import md5 from 'js-md5';
import env from '../config/env';

let util = {};
util.title = function (title) {
    title = title ? title + ' - TraderCat 您身边的贸易专家' : 'TraderCat 您身边的贸易专家';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://manager.sportsdb.cc:9001' :
    env === 'production' ?
        'http://manager.tradercat.net' :
        'http://';

util.md5 = md5;

util.log = {};
util.log.duration = 3;
util.log.info = function (content) {
    Message.info({
        content: content,
        duration: util.log.duration
    });
};

util.log.error = function (content) {
    Message.error({
        content: content,
        duration: util.log.duration
    });
};

util.log.success = function (content) {
    Message.success({
        content: content,
        duration: util.log.duration
    });
};

util.log.warning = function (content) {
    Message.warning({
        content: content,
        duration: util.log.duration
    });
};

util.loading = function (message) {
    Message.loading({
        content: message,
        duration: 0
    });
};

util.closeLoading = function () {
    Message.destroy();
};

util.ajax = axios.create({
    baseURL: ajaxUrl,
    withCredentials: true,
    timeout: 10000
});

export default util;