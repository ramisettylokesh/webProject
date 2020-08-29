var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * customer schema
 */
var customerSchema=new Schema({
    _id: {
        type:String,
        required:true,
        unique:true
    },
    name:{
       type:String,
       required:true
   },
   address:{
       type:String,
       require:false
   },
   age:{
        type:Number,
        require:false
   }
});
var customerdetails = mongoose.model('customerdetails', customerSchema);
module.exports = customerdetails;