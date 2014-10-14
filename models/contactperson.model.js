/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var mongoose = require('mongoose');

var contactPersonSchema = mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String,
        match:[/.+\@.+\..+/, 'Please fill a valid email address']
    },
    phone_number:{
        type:String,
        trim:true
    },
    relationship:{
        type:String
    }

});
module.exports = contactPersonSchema;