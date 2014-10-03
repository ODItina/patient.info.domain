/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var patientSchema = require('../models/patient_model');
var AddressInfo = require('../dto/address_info');

exports.create = function(args, next){
    var addressInfo  = new AddressInfo(args);
    patientSchema.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.address_info.push(addressInfo);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};

exports.remove = function(args, next){
    patientSchema.findOne({_id:args.patient._id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.address_info.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};


exports.update = function(args, next){
    var addressInfo  = AddressInfo(args);
    patientSchema.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.address_info.id(args._id).set(addressInfo);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};


