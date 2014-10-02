/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var _ = require('lodash');
var patientSchema = require('../models/patient_model');
var PhoneContact = require('../dto/phone_contact');

exports.create = function(args, next){
    var phoneContact  = new PhoneContact(args);
    patientSchema.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.phone_contact.push(phoneContact);
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

exports.delete = function(args, next){
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