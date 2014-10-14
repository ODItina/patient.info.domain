/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var Patient = require('../models/patient.model');

exports.createPregnancyInfo = function(args, next){
    Patient.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.pregnancy_info.push(args);
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

exports.updatePregnancyInfo = function(args, next){
    Patient.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.pregnancy_info.id(args._id).set(args);
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

exports.removePregnancyInfo = function(args, next){
    Patient.findOne({_id:args.patient._id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.pregnancy_info.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};