/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: title.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: Title file which only displays the title of the index page (for now).
 */

/*
    Retrieves the title of the index page
    TODO: eventually it will become getIndexHeader.
 */
function getIndexTitle(req, res){
    res.render('index', { title: 'Welcome to my portfolio'});
}

module.exports = getIndexTitle; // exporting for testing purposes.