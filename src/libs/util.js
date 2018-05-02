import axios from 'axios';
import env from '../config/env';

let util = {};
util.title = function (title) {
    title = title ? title + ' - TraderCat 您身边的贸易专家' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://uc.sportsdb.cc' :
    env === 'production' ?
        'https://www.url.com' :
        'http://uc.sportsdb.cc';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    headers: {'Access-Control-Allow-Origin': 'uc.sportsdb.cc'},
    timeout: 30000
});

export default util;