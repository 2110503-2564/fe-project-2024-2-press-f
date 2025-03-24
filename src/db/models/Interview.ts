import mongoose from "mongoose";
const InterviewSchema=new mongoose.Schema({ 
    interviewDate: { 
        type: Date, 
        required:true 
    }, 
    user:{ 
        type:mongoose.Schema.ObjectId, 
        ref: 'User', 
        required:true 
    }, 
    company:{ 
        type:mongoose.Schema.ObjectId, 
        ref: 'Company', 
        required:true 
    }, 
    createdAt: { 
        type: Date, 
        default: Date.now
    } 
});

const Interview = mongoose.models.Interview || mongoose.model("Interview", InterviewSchema)
export default Interview