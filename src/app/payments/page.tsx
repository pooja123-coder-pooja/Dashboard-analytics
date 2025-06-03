// app/payments/page.tsx
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { payments } from "@/data/payments"; // Use alias import for clean code

const PaymentsPage = async () => {
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
};

export default PaymentsPage;