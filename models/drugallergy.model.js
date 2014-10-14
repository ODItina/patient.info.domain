/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var drugAllergySchema = mongoose.Schema({

    description:{
        type:String,
        required:'Please enter description of drug allergy'
    },
    remarks:{
        type:String
    }
});
module.exports = drugAllergySchema;