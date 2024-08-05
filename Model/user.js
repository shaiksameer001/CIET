const mongoose=require("mongoose")
const Schema=mongoose.Schema
constpassportLocalMangoose=require("passport-local-mongoose");
var User=new Schema({
	username:{
		type:String
	},
	password:{
		type:String
	}
})
User.plugin(constpassportLocalMangoose);
module.exports=mongoose.model("User",User)