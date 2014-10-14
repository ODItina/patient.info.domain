/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var Patient = require('../models/patient.model');


//Create sub doc
exports.createAddressInfo = function(args, next){
    Patient.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.address_info.push(args);
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


//Delete Sub doc
exports.removeAddressInfo = function(args, next){
    Patient.findOne({_id:args.patient._id}, function(err, doc){
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

//Update sub doc
exports.updateAddressInfo = function(args, next){
    Patient.findOne({_id: args.patient._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.address_info.id(args._id).set(args);
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


