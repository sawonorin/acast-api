const Parser = require("rss-parser");
const getChecksum = require('./CheckSum');
let parser = new Parser();
let { successMessage, errorMessage } = require('./status');


const rssReader = async (feedURL) => {
    try {
        const feeds = await parser.parseURL(feedURL);
        const lineItem = await Promise.all(feeds.items.map(async (item) => {
            const checksum = await getChecksum(item.enclosure.url);
            return {
                title: item.title,
                checksum,
                url: item.enclosure.url,
            };
        }));
        successMessage.dataitems = lineItem
        return successMessage;

    } catch (error) {
        console.log('Error: ', error.message);
        errorMessage.message = error.message
        return errorMessage;
    }
};

module.exports = rssReader;