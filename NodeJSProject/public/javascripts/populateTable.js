/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: populateTable.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: This class populates the table with data from the dataset provided. It uses jQuery to do the population of the data.
 */

const table = $(() => {

    /*
        When clicking on "read data", it will trigger this function.
    */

    $("#fetchdata").on('click', () => {

        $.get( "/fetchdata", (data) => {

            let inventory = data['data'];

            $("#trdata").html('');

            $("#message").hide(); // hides the import message.

            let tableFields = '';

            // For each loop that loops through the data stored in "inventory" and populates the table fields
            $.each(inventory, (index, food) => {

                tableFields += '<tr><td>'+(index+1)+'</td><td>'+food['ref_date']+'</td><td>'+food['geo']+'</td><td>'+food['dguid']+'</td><td>'+food['foodCategory']+
                    '</td><td>'+food['commodity']+'</td><td>'+food['uom']+'</td><td>'+food['uom_id']+'</td><td>'+food['scalar_factor']+
                    '</td><td>'+food['scalar_id']+'</td><td>'+food['vector']+'</td><td>'+food['coordinates']+'</td><td>'+food['value']+'</td><td>'+food['status']+
                    '</td><td>'+food['symbol']+'</td><td>'+food['terminated']+'</td><td>'+food['decimals']+'</td></tr>';

            });

            $("#trdata").html(tableFields); // Updating the tr with data extracted.

        });
    });

    /*
        This function imports the data from the csv file, showing a success message if all the data are read correctly.
    */

    $("#importdata").on('click', () => {

        $.get( "/import", (data) => { // Once import works, display a success message.

            $("#message").show().html(data['success']);

        });

    });

    $("#insertdata").on('click', () => {

        $.get("/insertdata", (data) => {
            $("#message").show().html(data['success']);

        });
    });

    $("#updatedata").on('click', () => {

        $.get("/updatedata", (data) => {
            $("#message").show().html(data['success']);
        });
    });

    $("#deletedata").on('click', () => {

        $.get("/deletedata", (data) => {
            $("#message").show().html(data['success']);
        });
    });

    $("#resetdata").on('click', () => {

        $.get("/resetdata", (data) => {

            $("#trdata").html('');

        });
    });
});

