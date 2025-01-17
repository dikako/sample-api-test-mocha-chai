// Import necessary libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
require('dotenv').config(); // Load environment variables from .env file

// Use chai HTTP for making requests
chai.use(chaiHttp);

// Define the base URL of the API you're testing
const baseUrl = process.env.BASE_URL; // Example API

// API Test Suite
describe('API Testing with Mocha and Chai', function () {

    // GET request example
    it('should return a list of users', function (done) {
        chai.request(baseUrl)
            .get('/users?page=2')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.page).eql(2);

                done();
            });
    });
});
