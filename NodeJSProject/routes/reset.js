/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: fetch.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: Deletes the collection from MongoDB
 */

const mongoose = require('mongoose');
const foodInventory = mongoose.model('foodInventory'); //importing the Schema for MongoDB

/*
    Fetches data from the database assuming all the data is there.
 */
function resetData(req, res) {
    mongoose.connection.collections['foodinventories'].drop( function(err) {
        console.log('collection dropped');
    });
}

module.exports = resetData;