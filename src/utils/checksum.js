const md5 = require('blueimp-md5');
const fetch = require('cross-fetch');
const { FETCH_OPTIONS, method } = require('./config');

const getChecksum = async (url) => {
    const res = await fetch(url, { ...FETCH_OPTIONS, method });
    if (res) {
        const checksum = md5(res.body, url);
        return checksum;
    } else {
        return null;
    }

};

module.exports = getChecksum;