import { columns } from '@/app/(root)/users/components/columns';
import { DataTable } from '@/app/(root)/users/components/data-table';
import { userServices } from '@/app/(root)/users/services';

export default async function Page() {
  const users = await userServices.getUsers().then((res) => res.data);
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
        </div>
      </div>
      <DataTable data={users} columns={columns} />
    </div>
  );
}
