/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: foodInventory.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: This file creates a Schema which will eventually be exported to MongoDB and create the fields to be populated by the dataset.
 */

const mongoose = require('mongoose'); //MongoDB's module
const Schema = mongoose.Schema; // Making const Schema a MongoDB Schema object.

const foodInventorySchema = new Schema({ // Creating a new Schema with the values related to the dataset.
   ref_date: {type: Number, Required: 'Ref_date cannot be null.'},
   geo: { type: String, Required: 'GEO cannot be null.'},
   dguid: { type: String, Required: 'DGUID cannot be null.'},
   foodCategory: { type: String, Required: 'Food category cannot be null.'},
   commodity: { type: String, Required: 'Commodity cannot be null.'},
   uom: { type: String, Required: 'UOM cannot be null.'},
   uom_id: { type: Number, Required: 'UOM_ID cannot be null.'},
   scalar_factor: { type: String, Required: 'Scalar_factor cannot be null.'},
   scalar_id: { type: Number},
   vector: { type: String, Required: 'Vector cannot be null.'},
   coordinates: { type: String, Required: 'Coordinates cannot be null.'},
   value: { type: Number},
   status: { type: String},
   symbol: { type: String},
   terminated: { type: String},
   decimals: { type: Number}
});

module.exports = mongoose.model('foodInventory', foodInventorySchema); // Exporting the Schema so other files can use it.