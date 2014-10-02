/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var patient_read = require('./read.services/patient');
var patient_write = require('./write.services/patient');

var patient = require('./dto/patient');
var address_info = require('./dto/address_info');
var phone_contact = require('./dto/phone_contact');
var contact_person = require('./dto/contact_person');


exports.dto  = {
    patient: patient,
    address_info:address_info,
    phone_contact:phone_contact,
    contact_person:contact_person
};

exports.patient_service = {
    read_service:patient_read,
    write_service:patient_write
};

exports.phone_contact_service = require('./write.services/phone_contact');
exports.address_info_service = require('./write.services/address_info');
exports.contact_person_service = require('./write.services/contact_person');

