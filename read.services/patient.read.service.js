/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var patientSchema = require('../models/patient.model');

exports.getPatient = function(args, next){
    patientSchema.findOne({_id:args._id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getPatients = function(args, next){
    patientSchema.find({}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};