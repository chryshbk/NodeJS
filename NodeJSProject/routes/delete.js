/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: delete.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: November 7, 2018
 * Description: Deletes a record from the database
 */

const mongoose = require('mongoose');
const foodInventory = mongoose.model('foodInventory'); //importing the Schema for MongoDB

/*
    Function should delete a record from the database retrieved by its id.
 */
function deleteData(req, res){
    foodInventory.findOneAndRemove({ _id: '5be8e3176b7d652ee4f829f6' }, function(err) {
        if (err) throw err;

        console.log('Record deleted!');
        res.json({success : "Record successfully deleted!", status : 200});
    });
}

module.exports = deleteData;