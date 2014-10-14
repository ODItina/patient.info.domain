/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var mongoose = require('mongoose');
var addressInfoSchema = require('./addressinfo.model'),
    phoneContactSchema = require('./phonecontact.model'),
    contactPersonSchema = require('./contactperson.model'),
    pregnancyInfoSchema = require('./pregnancyinfo.model'),
    drugAllergySchema = require('./drugallergy.model'),
    medicalHistorySchema = require('./medicalhistory.model');


var patientSchema = mongoose.Schema({
    surname:{
        type:String,
        required: 'Please fill this patient surname'
    },
    first_name: {
        type:String,
        required:'Please fill this patient first name'
    },

    other_names:{
        type:String
    },

    gender: {
        type:String,
        enum:['Male', 'Female'],
        required:'Please fill this patient gender'
    },
    marital_status:{
        type:String,
        enum:['Single', 'Married', 'Divorced', 'Widowed', 'Others']
    },
    birth_date: {
        type:Date,
        required:'Please fill this patient date of birth'
    },
    educational_level:{
        type:String,
        enum:['None', 'Primary', 'Quranic','Secondary', 'Post Secondary']
    },
    occupation_status:{
        type:String,
        enum:['Unemployed', 'Employed', 'Student', 'Retired']
    },

    address_info: [addressInfoSchema],

    contact_person:[contactPersonSchema],

    medical_history:[medicalHistorySchema],

    drug_allergy:[drugAllergySchema],

    pregnancy_info:[pregnancyInfoSchema],

    hiv_status_at_registration:{
        type:String,
        enum:['HIV+none ART', 'HIV+ART']
    },
    email:{
        type:String,
        match:[/.+\@.+\..+/, 'Please fill a valid email address']
    },

    phone_contact: [phoneContactSchema],

    registration_date:{
        type:Date,
        default:Date.now
    }
});
var Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;
