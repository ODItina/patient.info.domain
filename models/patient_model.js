/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var mongoose = require('mongoose');
var addressInfoSchema = require('./address_info_model');
var phoneContactSchema = require('./phone_contact_model');
var contactPersonSchema = require('./contact_person_model');

var patientSchema = mongoose.Schema({
    surname:{type:String, required:true},
    first_name: {type:String, required:true},
    other_names:String,
    gender: {type:String, enum:['Male', 'Female'], required:true},
    marital_status:{type:String, enum:['Single', 'Married', 'Divorced', 'Widowed', 'Others']},
    birth_date: {type:Date, required:true},
    date_confirmed:Date,
    educational_level:{type:String, enum:['None', 'Primary', 'Quranic','Secondary', 'Post Secondary']},
    occupation_status:{type:String, enum:['Unemployed', 'Employed', 'Student', 'Retired']},
    address_info: [addressInfoSchema],
    contact_person:[contactPersonSchema],
    hiv_status_at_registration:{type:String, enum:['HIV+none ART', 'HIV+ART']},
    email:String,
    phone_contact: [phoneContactSchema],
    registration_date:Date
});
var Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;
