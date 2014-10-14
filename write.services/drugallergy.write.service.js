/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var Patient = require('../models/patient.model');


//Create sub doc
exports.createDrugAllergy = function(args, next){
    Patient.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.drug_allergy.push(args);
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


//Create sub doc
exports.updateDrugAllergy = function(args, next){
    Patient.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.drug_allergy.id(args._id).set(args);
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


//Remove sub docs
exports.removeDrugAllergy = function(args, next){
    Patient.findOne({_id:args.patient._id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.drug_allergy.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};