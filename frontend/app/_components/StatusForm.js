"use client";

import { useState } from "react";
import { updateLead } from "../_lib/data-service";

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function StatusForm({ lead }) {
  const [showSelect, setShowSelect] = useState(false);
  const [status, setStatus] = useState(lead.status);

  function handleSelectChange() {
    updateLead(lead._id, status);
    setShowSelect(false);
  }

  const statusString = capitalizeFirstLetter(status?.split("_").join(" "));

  return (
    <div className="px-5 py-2 bg-gray-50 rounded h-full">
      <p className="text-sm">Status</p>
      {!showSelect && (
        <div className="flex gap-2">
          <span className="text-xl font-semibold">{statusString}</span>
          <button
            className="cursor-pointer"
            onClick={() => setShowSelect(true)}
          >
            ✏️
          </button>
        </div>
      )}
      {showSelect && (
        <div className="flex gap-2 items-center justify-between">
          <div className="px-1 py-2 rounded h-full">
            <select
              name="status"
              id="status"
              className="px-3 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
          <div className="flex gap-2 items-center">
            <button
              className="cursor-pointer"
              onClick={() => handleSelectChange()}
            >
              ✅
            </button>
            <button
              className="cursor-pointer"
              onClick={() => setShowSelect(false)}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatusForm;
