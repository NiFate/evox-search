"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';
import { Card, CardContent } from "@/components/ui/card"
import { notFound, useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';
import { format, fromUnixTime } from 'date-fns';
import { OTAData } from "@/lib/types";
import Loader from "@/components/loader";
import { cn, getDaysDifference, isIceCream, isOutdated } from "@/lib/utils";
import Link from "next/link";

export default function DevicePage() {
  const params = useParams<{ codename: string; }>()

  async function getDeviceInfo(): Promise<OTAData> {
    const response = await fetch(`/api/device?code=${params.codename}`);
    if (response.status == 404) {
      return notFound();
    }
    return response.json();
  }

  const { data, isError, isSuccess, isLoading } = useQuery<OTAData, Error>({ queryKey: [`device_${params.codename}`], queryFn: getDeviceInfo });

  if (isError) { return notFound(); }
  if (isLoading) { return (<Loader />) }
  if (isSuccess) {

    const buildDate = format(fromUnixTime(data?.meta.timestamp), "dd.MM.yyyy");
    const outdated = isOutdated(data.meta.version, "9.2");
    const androidVersion = isIceCream(data.meta.version, "10.0");
    const buildDiferrence = getDaysDifference(data.meta.timestamp);

    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 gap-4">
        <h1 className="text-5xl font-semibold">About device</h1>
        <Card className="w-full max-w-md">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{data.meta.device}</h3>
              <div className="flex flex-row gap-2">
                <Badge variant="secondary">{data.meta.oem}</Badge>
                <Badge variant="secondary">{params.codename}</Badge>
              </div>
            </div>
            <hr></hr>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Maintainer</span>
                <Badge variant="secondary">{data.meta.maintainer}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Evolution X</span>
                <Badge variant="secondary">{data.meta.version}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Android</span>
                <Badge variant="secondary">
                  {androidVersion ? "15" : "14"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Latest release</span>
                <Badge variant="secondary">{buildDate}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Changelog</span>
                <Link href={`https://raw.githubusercontent.com/Evolution-X/OTA/udc/changelogs/${params.codename}.txt`} target="_blank">
                  <Badge variant="secondary">Show</Badge>
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">XDA Thread</span>
                <Link href={data.meta.forum} target="_blank">
                  <Badge variant="secondary">Show</Badge>
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Status</span>
                <Badge variant="secondary" className={cn(outdated ? "text-orange-400" : "text-green-500")}>
                  Maintained
                </Badge>
              </div>
              {outdated ? (
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Icon icon="iconoir:warning-triangle-solid" className="text-orange-400" width="32" height="32" />
                  <span className="text-muted-foreground text-xs text-orange-400">Your device has not received updates for a
                    {buildDiferrence} days, support may be discontinued</span>
                </div>
              ) : ""}
            </div>
            <hr></hr>
            <div className="flex flex-col gap-2 justify-center">
              <Link href={`${data.meta.download}?use_mirror=freefr`}>
                <Button variant="secondary" className="w-full">Download ROM</Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" className="w-full">Back to search</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main >
    );
  }
}
