import {
  getLeadsRecords,
  createLeadRecord,
  updateLeadStatus as updateLeadStatusRecord,
  deleteLeadRecord,
} from "../models/leads.model.js";

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

async function updateLeadStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Missing required field(s)" });
    }

    const updatedLead = await updateLeadStatusRecord(id, status);

    return res.status(200).json(updatedLead);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteLead(req, res) {
  try {
    const { id } = req.params;

    const deletedLead = await deleteLeadRecord(id);

    return res.status(200).json(deletedLead);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { getLeads, createLead, updateLeadStatus, deleteLead };
