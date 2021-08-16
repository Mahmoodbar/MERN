const mongoose = require('mongoose');
// // const { number } = require('prop-types');
// const internal = require('stream');
 
const PirateSchema = new mongoose.Schema({
    name:{
    type: String,
    required : [true , 'name is required'],
    minlength: [3 , " name must be at least 3 characters"] 
    } ,

    treasure:{
        type: Number ,
        required: [ true , '# is required']
    } , 

    position : {
        type: String ,
        required : [true , 'position is required'],
    } , 
     
    image : {
        type : String , 
        required : [ true, " image is required "]
    },

    peg : {
        type: Boolean
    }
    ,

    eye : {
        type: Boolean
    },

    hook : {
        type: Boolean
    }


    
  
} , {timestamps : true });
 
const Pirate = mongoose.model('Pirate', PirateSchema);
 
module.exports = Pirate;