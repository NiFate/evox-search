'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

export default function SiteAlert() {
  const [showDialog, setShowDialog] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    const shouldShow = localStorage.getItem('show-site-alert') !== 'false'
    setShowDialog(shouldShow)
  }, [])

  const handleClose = () => {
    setShowDialog(false)
    if (dontShowAgain) {
      localStorage.setItem('show-site-alert', 'false')
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setDontShowAgain(checked)
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog} aria-label="Site Entry Alert">
      <DialogContent className="max-w-sm sm:max-w-[595px] md:max-w-[725px] p-4 sm:p-6 rounded-md" onInteractOutside={(e) => { e.preventDefault() }} aria-describedby={undefined}>
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-lg sm:text-2xl font-semibold text-center">
            Important news!
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-lg text-center">
            I want to inform you that Evolution X has opened their own website, so this service will be closed soon, you can continue to use it or go to the official site!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-start space-x-2 mt-4">
          <Checkbox
            id="dontShowAgain"
            checked={dontShowAgain}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="dontShowAgain"
            className="text-sm font-medium leading-tight cursor-pointer"
          >
            Don't show this message again
          </label>
        </div>
        <DialogFooter className="mt-6 flex flex-col gap-2 sm:flex-row sm:space-x-2">
          <Button onClick={handleClose} size="sm" variant="secondary" className="w-full sm:w-auto order-2 sm:order-1 font-bold text-sm">
            Continue to use
          </Button>
          <Button asChild size="sm" variant="secondary" className="w-full sm:w-auto order-1 sm:order-2 font-bold text-sm">
            <Link href="https://evolution-x.org/" target="_blank" rel="noopener noreferrer">
              Go to official site
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
