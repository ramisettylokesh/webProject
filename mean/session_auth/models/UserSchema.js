var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * user schema
 */
var userSchema=new Schema({
    UserName: {
        type:String,
        required:true
    },
    UserID:{
       type:String,
       required:true,
       unique:true
   },
   Password:{
       type:String,
       required:true
   }
});
var userdetails = mongoose.model('userdetails', userSchema);
module.exports = userdetails;