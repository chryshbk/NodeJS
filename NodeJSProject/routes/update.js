/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: update.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: November 11, 2018
 * Description: Updates the records from the database.
 */

const mongoose = require('mongoose');
const foodInventory = mongoose.model('foodInventory'); //importing the Schema for MongoDB

/*
    Updating a field from the database finding by its id.
 */
function updateData(req, res){
    foodInventory.findByIdAndUpdate("5be8e3176b7d652ee4f829f5", {commodity: 'Brazilian food' }, (err, foodRecord) =>{
       if (err) throw err;

       res.json({success : "Record successfully updated!", status : 200});
    });
}

module.exports = updateData;