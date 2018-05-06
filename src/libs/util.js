import axios from 'axios';
import env from '../config/env';

let util = {};
util.title = function (title) {
    title = title ? title + ' - TraderCat 您身边的贸易专家' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://manager.sportsdb.cc:9001' :
    env === 'production' ?
        'http://manager.tradercat.net' :
        'http://';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;