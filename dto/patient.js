/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
module.exports =  function(args){
    var patient = {};

    patient.first_name = args.first_name;
    patient.surname = args.surname;
    patient.other_names = args.other_names;
    patient.gender = args.gender;
    patient.date_confirmed = args.date_confirmed;
    patient.marital_status = args.marital_status;
    patient.birth_date = args.birth_date;
    patient.education_level = args.education_level;
    patient.occupation_status = args.occupation_status;
    patient.address_info= args.address_info;
    patient.contact_person = args.contact_person;
    patient.hiv_status_at_registration = args.hiv_status_at_registration;
    patient.email= args.email;
    patient.phone_contact= args.phone_contact;
    patient.registration_date = args.registration_date || new Date();


    patient.is_authenticated = false;



    return patient;
};