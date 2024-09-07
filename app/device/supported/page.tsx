"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { useDevices } from "@/hooks/useDevices";
import Link from "next/link";
import Loader from "@/components/loader";
import { firstBy } from "thenby"

export default function TestPage() {

  const { data, isLoading } = useDevices();

  if (isLoading) { return <Loader /> }

  const oemCounts = data?.reduce((acc, device) => {
    const oemKey = device.meta.oem.toLowerCase();
    acc[oemKey] = (acc[oemKey] || 0) + 1;
    return acc;
  }, {});

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 gap-4">
      <h1 className="text-2xl md:text-5xl font-semibold">Supported Device List</h1>
      <Card className="w-full max-w-3xl">
        <CardContent className="p-6 space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Manufacturer</TableHead>
                <TableHead>Device</TableHead>
                <TableHead className="w-[100px]">Codename</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                data?.sort(
                  firstBy((a, b) => {
                    const oemA = oemCounts[a.meta.oem.toLowerCase()] || 0;
                    const oemB = oemCounts[b.meta.oem.toLowerCase()] || 0;
                    return oemB - oemA;
                  })
                ).map((device, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{device.meta.oem}</TableCell>
                    <TableCell className="font-medium">
                      <Link href={`/device/${device.codename}`}>
                        {device.meta.device}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{device.codename}</Badge>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
