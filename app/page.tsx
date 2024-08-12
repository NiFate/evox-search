"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { navigate } from "@/lib/navigate"
import { useForm } from "react-hook-form"

export default function Home() {

  const form = useForm({ defaultValues: { codename: "" } })

  const onSubmit = (data: any) => { navigate(`/device/${data.codename}`) }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-[350px] md:w-[550px]">
            <CardHeader>
              <CardTitle className="text-2xl">Evolution X Search</CardTitle>
              <CardDescription>Download ROM for your device in a few clicks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center">
                <div className="flex flex-col space-y-2">
                  <FormField
                    control={form.control}
                    name="codename"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Device</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the codename of your device" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="secondary" className="w-full font-medium">Search ROM for device</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
}
