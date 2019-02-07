/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: insert.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: November 7, 2018
 * Description: Inserts a record into the database.
 */

const mongoose = require('mongoose');
const foodInventory = require('../models/foodInventory');

/*
    Adding a record to the foodInventory schema.
 */
function insertData(req, res) {
    let newData = new foodInventory({
        ref_date: 1950,
        geo: "Canada",
        dguid: "2016A000011124",
        foodCategory: "Food available",
        commodity: "Sausage",
        uom: "Kilograms per person, per year",
        uom_id: 194,
        scalar_factor: "units",
        scalar_id: 1,
        vector: "v108209",
        coordinates: "1.3.1",
        value: 5.99,
        status: "",
        symbol: "",
        terminated: "X",
        decimals: "2"
    });

    // Once it is added. we are going to save it.
    newData.save((err) =>{
       if (err) return next(err);

       console.log("Record created");
       res.json({success : "Record successfully inserted!", status : 200});
    });
}

module.exports = insertData;