var mongoose = require('mongoose');
/**
 * template for importDataSchema
 */
var importDataSchema = new mongoose.Schema({
	Name:{
  	type:String,
  	required:true,
  	unique:true
	},

Uploaded_on:{
      type:Date,
      required:true
	},
	
	Uploaded_by:{
      type:String,
      required:true
	}
  });
var importData=mongoose.model("importdata", importDataSchema);
module.exports = importData;
