/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var medicalHistorySchema = mongoose.Schema({
    symptom_description:{
        type:String,
        required:'Please enter symptom description'
    },
    duration_of_symptom:{
        type:String,
        required:'Please enter duration of symptom'
    },
    was_hospitalized:{
        type:Date
    }
});
module.exports = medicalHistorySchema;
