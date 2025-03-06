import { getLeadsRecords, createLeadRecord } from "../models/leads.model.js";

async function getLeads(req, res) {
  try {
    const leads = await getLeadsRecords();

    if (!leads) {
      return res.status(404).json({ message: "No leads found" });
    }

    return res.status(200).json(leads);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function createLead(req, res) {
  try {
    const lead = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!lead.name || !lead.email || !emailRegex.test(lead.email)) {
      return res.status(400).json({ message: "Missing required field(s)" });
    }

    const newLead = await createLeadRecord(lead);

    return res.status(201).json(newLead);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { getLeads, createLead };
