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

export default function TestPage() {

  const { data, isLoading } = useDevices();

  if (isLoading) { return <Loader /> }

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
              {data?.map((device, index) => (
                <TableRow>
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
