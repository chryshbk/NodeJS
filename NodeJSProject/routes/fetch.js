/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: fetch.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: Fetch file which retrieves all the information from MongoDB.
 */

const mongoose = require('mongoose');
const foodInventory = mongoose.model('foodInventory'); //importing the Schema for MongoDB

/*
    Fetches data from the database assuming all the data is there.
 */
function getFetchData(req, res) {
    foodInventory.find({}, (err, docs) => { // Trying to find data in the database.

        if (!err) { // no errors = success otherwise throw an error.
            res.json({success: "Updated Successfully", status: 200, data: docs});
            console.log("Data updated");
        }

        else {
            throw err;
        }
    });
}

module.exports = getFetchData;