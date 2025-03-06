import leads from "./leads.schema.js";

async function getLeadsRecords() {
  try {
    const records = await leads.find().sort({ created_at: -1 });
    return records;
  } catch (error) {
    throw new Error(error);
  }
}

async function createLeadRecord(lead) {
  try {
    const response = await leads.create(lead);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export { getLeadsRecords, createLeadRecord };
