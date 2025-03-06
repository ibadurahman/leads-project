"use client";

import { useState } from "react";
import { createLead } from "../_lib/data-service";

function LeadForm() {
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    createLead(formData);

    event.target.reset();
  }

  return (
    <div className="">
      <div className="flex justify-end">
        <button
          className="rounded-lg bg-purple-300 px-2 py-1.5 text-white cursor-pointer hover:bg-purple-400 hover:shadow-md transition-colors"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Hide Form" : "Add Leads"}
        </button>
      </div>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-primary-900 py-4 px-3 text-lg flex gap-5 flex-col"
        >
          <div className="p-5 py-3 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="grid grid-cols-4 items-center w-full gap-4">
              <div className="px-5 py-2 rounded">
                <label htmlFor="name">Name?</label>
                <input
                  autoFocus
                  type="text"
                  name="name"
                  id="name"
                  className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                  placeholder="Leads Name"
                  required
                />
              </div>
              <div className="px-5 py-2 rounded">
                <label htmlFor="email">Email?</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                  placeholder="Put valid email"
                  required
                />
              </div>
              <div className="px-5 py-2 rounded h-full">
                <label htmlFor="status">Status?</label>
                <select
                  name="status"
                  id="status"
                  className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                  required
                >
                  <option value="" key="">
                    Select status...
                  </option>
                  <option value="new">New</option>
                  <option value="engaged">Engaged</option>
                  <option value="proposal_sent">Proposal Sent</option>
                  <option value="closed_won">Closed Won</option>
                  <option value="closed_lost">Closed Lost</option>
                </select>
              </div>
              <div className="flex space-x-2 justify-self-end">
                <button className="rounded-lg bg-blue-300 px-2 py-1.5 text-white cursor-pointer hover:bg-blue-400 hover:shadow-md transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default LeadForm;
