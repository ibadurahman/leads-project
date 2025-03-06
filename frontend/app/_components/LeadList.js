import { getLeads } from "../_lib/data-service";
import DeleteButton from "./DeleteButton";
import StatusForm from "./StatusForm";

async function LeadList() {
  const leads = await getLeads();

  if (!leads || !leads.length === 0) {
    return null;
  }

  return leads.map((lead) => (
    <div className="m-3 relative space-y-4" key={lead._id}>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="grid grid-cols-4 items-center w-full gap-4">
          <div className="px-5 py-2 bg-gray-50 rounded">
            <p className="text-xl font-bold">{lead.name}</p>
            <p className="text-lg font-normal">{lead.email}</p>
          </div>
          <StatusForm lead={lead} />
          <div className="px-5 py-2 bg-gray-50 rounded h-full">
            <p className="text-sm">Created at</p>
            <span className="text-xl font-semibold">
              {lead.created_at && new Date(lead.created_at).toLocaleString()}
            </span>
          </div>
          <div className="flex space-x-2 justify-self-end">
            <DeleteButton lead={lead} />
          </div>
        </div>
      </div>
    </div>
  ));
}

export default LeadList;
