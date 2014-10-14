/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
module.exports = function(args){
    var contact_person = {};

    contact_person.name = args.name;
    contact_person.email = args.email;
    contact_person.phone_number = args.phone_number;
    contact_person.relationship = args.relationship;

    return contact_person;
};

