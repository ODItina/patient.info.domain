/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var mongoose = require('mongoose');

var contactPersonSchema = mongoose.Schema({
    name: String,
    email: String,
    phone_number:String,
    relationship:String


});
module.exports = contactPersonSchema;