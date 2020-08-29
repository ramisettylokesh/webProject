var mongoose = require('mongoose');
/**
 * template for ViewLeadsSchema
 */
var ViewLeadsSchema = new mongoose.Schema({
	ID:{
  	    type:String,
  	    required:true,
  	    unique:true
	},
	Company_Name:{
  	    type:String,
  	    required:true
	},
	Created_by:{
	    type: String,
	    default:""
    },
    Uploaded_on:{
        type:Date,
        default:""
    },
    Created_on:{
        type:Date,
        default:""
    },
    lead_full_name:{
        type: String,
        default:""
    },
    lead_first_name:{
        type: String,
        default:""
    },
    lead_middle_name:{
        type: String,
        default:""
    },
    lead_last_name:{
        type: String,
        default:""
    },
    email_1:{
        type: String,
        default:""
    },
    email_2:{
        type: String,
        default:""
    },
    email_3:{
        type: String,
        default:""
    },
    filename:{
        type:String,
        required:true,
        unique:true
    }
  });
var viewLeads=mongoose.model("viewLeads", ViewLeadsSchema);
module.exports = viewLeads;