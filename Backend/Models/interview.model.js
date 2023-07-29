const mongoose = require("mongoose");


const interviewSchema = mongoose.Schema({
  userId: {type:String,required:true},
  subject:{type : String,enum: ['react', 'node', 'java'],default:"react"},
  level:{type : String,enum: ['easy', 'medium', 'hard'],default:"medium"},
  questions:{type:Number,default:5},
  results : [mongoose.Schema.Types.Mixed]

},{versionKey:false,timestamps:true});






const InterviewModel = mongoose.model("Interview",interviewSchema);
module.exports={InterviewModel};
