/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: import.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: Import file which retrieves all the information from the dataset and sends it to MongoDB.
 */

const csv = require('fast-csv');
const fs = require('fs');
const csvfile = __dirname + "/32100054.csv";
const stream = fs.createReadStream(csvfile);
const mongoose = require('mongoose');
const foodInventory = mongoose.model('foodInventory');

function getImportData(req, res){
    /*
        Behind the scenes, it is running a loop to populate the fInventory array with the data from the dataset.
    */
    let fInventory  = [];

    let csvStream = csv()
        .on("data", (data) => {
            let item;
            let counter = 0;

            switch(data[counter]) { // Checking to skip headers, mostly. Could not find a better way to do it, so I did in the "hard way".
                case 'REF_DATE':
                    counter++;
                    break;
                case 'GEO':
                    counter++;
                    break;
                case 'DGUID':
                    counter++;
                    break;
                case 'Commodity':
                    counter++;
                    break;
                case 'UOM':
                    counter++;
                    break;
                case 'UOM_ID':
                    counter++;
                    break;
                case 'SCALAR_FACTOR':
                    counter++;
                    break;
                case 'SCALAR_ID':
                    counter++;
                    break;
                case 'VECTOR':
                    counter++;
                    break;
                case 'COORDINATE':
                    counter++;
                    break;
                case 'VALUE':
                    counter++;
                    break;
                case 'SYMBOL':
                    counter++;
                    break;
                case 'STATUS':
                    counter++;
                    break;
                case 'TERMINATED':
                    counter++;
                    break;
                case 'DECIMALS':
                    counter++;
                    break;
                default:
                    item = new foodInventory({ // Creating a foodInventory object, storing data into the fields for the Schema.
                        ref_date: data[counter],

                        geo: data[counter + 1],

                        dguid: data[counter + 2],

                        foodCategory: data[counter + 3],

                        commodity: data[counter + 4],

                        uom: data[counter + 5],

                        uom_id: data[counter + 6],

                        scalar_factor: data[counter + 7],

                        scalar_id: data[counter + 8],

                        vector: data[counter + 9],

                        coordinates: data[counter + 10],

                        value: data[counter + 11],

                        status: data[counter + 12],

                        symbol: data[counter + 13],

                        terminated: data[counter + 14],

                        decimals: data[counter + 15]
                    });
                    item.save(function(error){ // Saving the item containing the objects into the database.
                        console.log(item);
                        if(error) throw error;
                    });
                    counter++;
                    break;
            } // end of the switch case

        }).on("end", () =>{ // Gets here when it is done reading the file.
            console.log(" End of file import");
        });

    stream.pipe(csvStream); // Reads data from the csvStream

    res.json({success : "Data imported successfully.", status : 200});
}

module.exports = getImportData;