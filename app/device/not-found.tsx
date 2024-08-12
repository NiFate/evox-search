"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from '@iconify/react';
import Link from "next/link";

export default function DeviceNotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 gap-4">
      <h1 className="text-5xl font-semibold">Oops...</h1>
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-4">
          <div className="flex flex-col text-center items-center justify-center space-y-2">
            <h3 className="text-2xl font-bold">Your device is not found</h3>
            <p className="text-sm text-muted-foreground">You may have specified a secondary codename or the device is not supported</p>
          </div>
          <div className="flex justify-center">
            <Icon icon="tabler:mood-sad-filled" width="72" height="72" className="text-amber-500" />
          </div>
          <hr></hr>
          <div className="flex flex-col gap-2 justify-center">
            <Link href="/">
              <Button variant="secondary" className="w-full">Back to search</Button>
            </Link>
            <Link href="https://xdaforums.com/" target="_blank">
              <Button variant="secondary" className="w-full">Try searching on XDA</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
