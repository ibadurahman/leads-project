import Link from "next/link";
import { Suspense } from "react";
import LeadList from "../_components/LeadList";
import Spinner from "../_components/Spinner";
import LeadForm from "../_components/LeadForm";

export const metadata = {
  title: "Leads Management",
  description: "Manage your leads with ease",
};

export default function Page() {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <div className="text-4xl flex gap-2 items-center">
          <Link href="/">&larr;</Link>
          <h1 className="text-gray-800 font-medium">Start Managing Leads</h1>
        </div>
      </div>

      <LeadForm />
      <Suspense fallback={<Spinner />}>
        <LeadList />
      </Suspense>
    </div>
  );
}
