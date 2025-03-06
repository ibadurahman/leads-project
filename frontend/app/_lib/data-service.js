"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

const API_URL = "http://localhost:4000";

export async function getLeads() {
  try {
    const response = await axios.get(`${API_URL}/leads`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createLead(lead) {
  try {
    const payload = {
      name: lead.get("name"),
      email: lead.get("email"),
      status: lead.get("status"),
    };
    const response = await axios.post(`${API_URL}/leads`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      revalidatePath("/leads");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create lead");
  }
}

export async function updateLead(id, status) {
  try {
    const response = await axios.put(`${API_URL}/leads/${id}`, { status });

    if (response.status === 200) {
      revalidatePath("/leads");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update lead");
  }
}

export async function deleteLead(id) {
  try {
    const response = await axios.delete(`${API_URL}/leads/${id}`);

    if (response.status === 200) {
      revalidatePath("/leads");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete lead");
  }
}
