const mongoose = require("mongoose");


const interviewSchema = mongoose.Schema({
  userId: {type:String,required:true},
  interviewData: {
    type: [
      {
        role: { type: String, required: true },
        content: { type: String, required: true }
      }
          ],
    required: true,
    validate: [arrayMinLength, '{PATH} cannot be empty']
  },

},{versionKey:false,timestamps:true});

function arrayMinLength(arr) {
  return arr.length > 0;
}

const InterviewModel = mongoose.model("Interview",interviewSchema);
module.exports={InterviewModel};
