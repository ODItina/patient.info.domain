/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var patientSchema = require('../models/patient.model');

exports.createPhoneContact = function(args, next){
    patientSchema.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.phone_contact.push(args);
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

exports.removePhoneContact = function(args, next){
    patientSchema.findOne({_id:args.patient._id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.phone_contact.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};

exports.updatePhoneContact = function(args, next){
    patientSchema.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.phone_contact.id(args._id).set(args);
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