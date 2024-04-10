// Import necessary modules and functions
let { expect } = require('chai');
let sinon = require('sinon'); // Optional for mocking/stubbing

let { startCreateApp, createApp } = require('../path/to/your/service'); // Adjust the path accordingly

describe('Service Functions', function() {
    describe('startCreateApp', function() {
        it('should create app if folder does not exist', function() {
            // Mock readline_sync.keyInYN to return true
            let readlineSyncStub = sinon.stub(require('readline-sync'), 'keyInYN').returns(true);

            // Call startCreateApp with mock data
            startCreateApp('testApp', { dependencies: [] });

            // Assert that readline_sync.keyInYN was called
            expect(readlineSyncStub.calledOnce).to.be.true;

            // Restore the stub after the test
            readlineSyncStub.restore();
        });

        // Add more test cases for startCreateApp as needed
    });

    describe('createApp', function() {
        it('should copy template files and handle dependencies', function() {
            // Mock readline_sync.question to return mock input
            const readlineSyncStub = sinon.stub(require('readline-sync'), 'question');
            readlineSyncStub.onFirstCall().returns('mongoose');
            readlineSyncStub.onSecondCall().returns('mongo');

            // Call createApp with mock data
            createApp('testApp', { dependencies: [] });

            // Assert that readline_sync.question was called twice
            expect(readlineSyncStub.calledTwice).to.be.true;

            // Restore the stub after the test
            readlineSyncStub.restore();
        });

        // Add more test cases for createApp as needed
    });

  // Add more describe blocks and test cases for other functions as needed
});
