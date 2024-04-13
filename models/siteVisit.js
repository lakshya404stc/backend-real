const mongoose = require("mongoose")

const siteVisitModel = mongoose.Schema({
    lead:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"leadsModel"
    },
    source:String,
    prospectName:String,
    mobileNumber:Number,
    whatsappNumber:Number,
    address:String,
    projects: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "projectList" 
    }],
    intrestedIn:String,
    budgetUpto:String,
    siteVisitedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    visitDescription:String,
    followupInquiryStatus:String,
    nextFollowUpDate:String,
    followUpRemark:String,
    reference:Object
})

module.exports = mongoose.model("siteVisitModel",siteVisitModel)