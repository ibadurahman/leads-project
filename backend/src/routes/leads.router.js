import express from "express";
import {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} from "../controllers/leads.controller.js";

const leadsRouter = express.Router();
leadsRouter.get("/", getLeads);
leadsRouter.post("/", createLead);
leadsRouter.put("/:id", updateLeadStatus);
leadsRouter.delete("/:id", deleteLead);

export default leadsRouter;
