/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: index.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: Index file which retrieves all the information from title, fetch and import to populate the index page.
 */

/*
    Importing modules/libraries and storing into variables.
 */
const express = require('express');
const router = express.Router();
const getFetchData = require('./fetch');
const getImportData = require('./import');
const getIndexTitle = require('./title');
const insertData = require('./insert');
const updateData = require('./update');
const deleteData = require('./delete');
const resetData = require('./reset');

/*
    Getting all the functionalities of our index page
 */
router.get('/', getIndexTitle);
router.get('/import', getImportData);
router.get('/fetchdata',getFetchData);
router.get('/insertdata', insertData);
router.get('/updatedata', updateData);
router.get('/deletedata', deleteData);
router.get('/resetdata', resetData);

module.exports = router; // exporting for testing purposes.

