/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var Patient = require('../models/patient.model'),
    _ = require('lodash');

//Create

exports.createPatient = function(args, next){
    var patient = new Patient(args);
    patient.save( function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

//Update

exports.updatePatient = function(args, next){
    Patient.findOne(args._id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc = _.extend(doc, args);

            doc.save(function(err){
                if(!err){
                    return  next(null,doc);
                }
            });
        }
    });
};

//Delete

exports.remove = function(args, next){
    Patient.remove({_id:args._id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};
