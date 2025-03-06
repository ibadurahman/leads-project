import express from "express";
import { createLead, getLeads } from "../controllers/leads.controller.js";

const leadsRouter = express.Router();
leadsRouter.get("/", getLeads);
leadsRouter.post("/", createLead);

export default leadsRouter;
