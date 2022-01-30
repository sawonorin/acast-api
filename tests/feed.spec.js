const request = require('supertest');
const chai = require('chai');
const chaiexpect = chai.expect;
const sinon = require('sinon');
const app = require('../src/server')

describe("Testing RSS Feed endpoints", () => {

    it("should show list of rss feed when url is valid", async () => {
        const res = await request(app)
            .get('/api/feed/?url=https://rss.acast.com/varvet')
            .send()
        expect(res.statusCode).toEqual(200)
    });

    it("should not return list of rss feed when url is invalid", async () => {
        const res = await request(app)
            .get('/api/feed/?url=https://rss.acast.com/varvet99')
            .send()
        expect(res.statusCode).toEqual(404)
    });

    it("should return error message when url query param is empty", async () => {
        const res = await request(app)
            .get('/api/feed')
            .send()
        expect(res.statusCode).toEqual(404)
    });

});