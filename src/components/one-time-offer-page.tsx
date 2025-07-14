"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SalesPage } from '@/components/sales-page';
import { Skeleton } from '@/components/ui/skeleton';

export function OneTimeOfferPage() {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // This effect runs only on the client
    const hasVisited = localStorage.getItem('persuasionMasterVisited');
    if (hasVisited) {
      router.replace('/offer-expired');
    } else {
      localStorage.setItem('persuasionMasterVisited', 'true');
      setIsVerified(true);
    }
  }, [router]);

  if (!isVerified) {
    // Show a loader or skeleton UI while verifying. This prevents content flashing.
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background p-4">
        <div className="w-full max-w-4xl space-y-8">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-12 w-1/2" />
        </div>
      </div>
    );
  }

  return <SalesPage />;
}
