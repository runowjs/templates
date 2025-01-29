'use client';
import { columns } from '@/app/(root)/users/components/columns';
import { DataTable } from '@/app/(root)/users/components/data-table';
import { userServices } from '@/app/(root)/users/services';
import { useEffect, useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    setLoading(true);
    userServices
      .getUsers()
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
        </div>
      </div>
      <DataTable loading={loading} data={data || []} columns={columns} />
    </div>
  );
}
