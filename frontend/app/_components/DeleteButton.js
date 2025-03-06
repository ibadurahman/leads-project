"use client";

import { deleteLead } from "../_lib/data-service";

function DeleteButton({ lead }) {
  function handleDeleteLead(id) {
    deleteLead(id);
  }

  return (
    <button
      className="rounded-lg bg-red-300 px-2 py-1.5 text-white cursor-pointer hover:bg-red-400 hover:shadow-md transition-colors"
      onClick={() => handleDeleteLead(lead._id)}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
