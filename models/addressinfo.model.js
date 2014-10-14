/**
 * Created by KP_TerminalUser2 on 10/08/2014.
 */
var mongoose = require('mongoose');

var addressInfoSchema = mongoose.Schema({

    address_type:{
        type:String,
        enum:['Residential', 'Work Address']
    },
    street: {
        type:String
    },
    descriptive_remarks:{
        type:String
    },
    city_town_village: {
        type:String
    },
    locality_info:{
        type:String
    }

});

module.exports = addressInfoSchema;


