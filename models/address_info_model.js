/**
 * Created by KP_TerminalUser2 on 10/08/2014.
 */
var mongoose = require('mongoose');

var addressInfoSchema = mongoose.Schema({

    address_type:{type:String, enum:['Residential', 'Work Address']},
    street: String,
    descriptive_remarks:String,
    city_town_village: String,
    locality_info:String

});

module.exports = addressInfoSchema;


