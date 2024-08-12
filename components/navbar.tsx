"use client"

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="top-0 left-0 z-50 w-full bg-transparent px-4 py-3 md:px-6">
        <div className="mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <h1 className="text-sm lg:text-xl text-muted-foreground">Evolution X Search</h1>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link href="/device/supported" className="text-sm lg:text-lg font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Supported Devices
            </Link>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
}
