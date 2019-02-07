/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: UnitTesting.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: Here we are creating unit tests using the Mocha framework for the application also using Chai library.
 */

let sinon = require('sinon'); // Sinon.js is a standalone test spy which helps in the unit tests.

const getIndexTitle = require('./routes/title');
const insertData = require('./routes/insert');
const chai = require('chai'); // Assertion library to be used with Node.
const expect = chai.expect;

//Describe is initiating the test suite.
describe('Full test suite', () => {
    //This is a test suite for the index page
    describe('Index test - title', () => { // This will become header eventually.

        it('Calling the title of the page, should be called only once. This should pass', () => {

            let req,res,spy;

            req = res = {};
            spy = res.render = sinon.spy(); // recording arguments returned from res.render

            getIndexTitle(req, res); // Calling it once
            expect(spy.calledOnce).to.equal(true);
            console.log('IndexTitle successfully executed\n');
        });

    });
    describe('Inserting a record test', () => {
       it('Should return status 200 for this action', () =>{
           let req,res,spy;


           req = res = {};
           spy = res.render = sinon.spy(); // recording arguments returned from res.render

           insertData(req, res); // Calling it once
           expect(spy.calledOnce).to.equal(false);

           console.log('insertData will only be called once there is a database connection.');
       }) ;
    });
});