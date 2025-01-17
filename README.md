# API Testing with Mocha, Chai, and dotenv

This project demonstrates how to set up and perform API testing using the Mocha testing framework, Chai assertion library, and dotenv for environment variable management.

## Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

## Setup

Follow these steps to set up the project:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd sample-api-test-mocha-chai
```

### 2. Install Dependencies

Install the required dependencies by running the following command in your project directory:

```bash
npm install
```

This will install the following packages:

- `mocha`: A test framework that provides a structure for running the tests.
- `chai`: An assertion library for making test assertions.
- `chai-http`: A plugin for Chai that adds HTTP request capabilities for API testing.
- `dotenv`: A package that allows you to manage environment variables securely.

### 5. Write Tests

In the `test` directory, you can write your API tests using Mocha and Chai. Example test file (`test/apiTest.js`):

```javascript
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
```

### 6. Run the Tests

To run the tests, use the following command:

```bash
npm test
```

This will run all the tests using Mocha and provide feedback on whether they passed or failed.

## Conclusion

This project is a simple example of using Mocha, Chai, and dotenv for API testing. You can easily expand this setup to test different APIs, create additional test cases, and manage different environments by modifying the `.env` file.

## License

This project is licensed under the MIT License.
