/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var _ = require('lodash');

var patient = require('./dtos/patient'),
    addressInfo = require('./dtos/addressinfo'),
    phoneContact = require('./dtos/phonecontact'),
    contactPerson = require('./dtos/contactperson'),
    drugAllergy = require('./dtos/drugallergy'),
    medicalHistory = require('./dtos/medicalhistory'),
    pregnancyInfo = require('./dtos/pregnancyinfo');


module.exports.dto  = {
    patient: patient,
    addressInfo:addressInfo,
    phoneContact:phoneContact,
    contactPerson:contactPerson,
    drugAllergy:drugAllergy,
    medicalHistory:medicalHistory,
    pregnancyInfo:pregnancyInfo
};

module.exports.read = _.extend(
    require('./read.services/patient.read.service')
);

module.exports.write = _.extend(
    require('./write.services/patient.write.service'),
    require('./write.services/phonecontact.write.service'),
    require('./write.services/addressinfo.write.service'),
    require('./write.services/contactperson.write.service'),
    require('./write.services/drugallergy.write.service'),
    require('./write.services/medicalhistory.write.service'),
    require('./write.services/pregnancyinfo.write.service')
);

