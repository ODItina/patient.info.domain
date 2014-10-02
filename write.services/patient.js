/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var patientSchema = require('../models/patient_model');
var Patient = require('../dto/patient');

exports.create = function(args, next){
    var patient = new Patient(args);
    patientSchema.create(patient, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.update = function(args, next){
    var patient = new Patient(args);
    patientSchema.findOneAndUpdate({id: patient._id}, args, function(err, update){
        if(err){
            return next(err, null);
        }
        if(update){
            return next(null, update);
        }
    });
};

exports.remove = function(args, next){
    patientSchema.remove({_id:args._id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};
