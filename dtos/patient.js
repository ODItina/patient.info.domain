/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
module.exports =  function(args){
    var patient = {};

    //cs = child schema

    patient.first_name = args.first_name;
    patient.surname = args.surname;
    patient.other_names = args.other_names;
    patient.gender = args.gender;
    patient.marital_status = args.marital_status;
    patient.birth_date = args.birth_date;
    patient.education_level = args.education_level;
    patient.occupation_status = args.occupation_status;
    patient.address_info = args.address_info; //cs
    patient.contact_person = args.contact_person; //cs
    patient.medical_history = args.medical_history; //cs
    patient.drug_allergy = args.drug_allergy; //cs
    patient.pregnancy_info = args.pregnancy_info; //cs
    patient.hiv_status_at_registration = args.hiv_status_at_registration;
    patient.email= args.email;
    patient.phone_contact= args.phone_contact; //cs
    patient.registration_date = args.registration_date || new Date();


    patient.is_authenticated = false;



    return patient;
};