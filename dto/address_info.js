/**
 * Created by KP_TerminalUser2 on 09/08/2014.
 */

module.exports  = function(args){
    var address_info = {};

    address_info.is_current = args.is_current || true;
    address_info.address_type = args.address_type;
    address_info.street = args.street;
    address_info.descriptive_remarks = args.descriptive_remarks;
    address_info.city_town_village = args.city_town_village;
    address_info.locality_info = args.locality_info;

    return address_info;
};


