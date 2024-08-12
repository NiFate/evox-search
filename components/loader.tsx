"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Icon } from '@iconify/react';

export default function Loader() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 gap-4">
      <h1 className="text-3xl md:text-5xl font-semibold">Loading...</h1>
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-center space-y-2">
            <h3 className="text-lg md:text-xl font-bold">Getting information about your device</h3>
          </div>
          <div className="flex justify-center">
            <Icon icon="line-md:loading-loop" width="72" height="72" className="text-zinc-300" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
