const mongoose = require("mongoose");

const leadsSchema = mongoose.Schema({
  sourceOfLeads: String,
  leadName: String,
  mobileNumber: Number,
  WhatsappNumber: Number,
  address: String,
  projects: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "projectList" 
}],
  intrestedIn: String,
  budgetUpto: String,
  AssignTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  leadRemark: String,
  visitInquiryStatus: String,
  visitPlanDate: String,
  visitFollowupRemark: String,
  reference: Object,
});

module.exports = mongoose.model("leadsModel", leadsSchema);
