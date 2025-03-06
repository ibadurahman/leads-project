import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "new",
    enum: ["new", "engaged", "proposal_sent", "closed_won", "closed_lost"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Lead", LeadSchema);
