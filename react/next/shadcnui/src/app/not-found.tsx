import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-7xl">404</h2>
      <p className="text-md text-foreground/50">Page Not Found</p>
      <Button asChild>
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
