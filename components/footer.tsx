"use client"

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr />
      <footer className="text-muted-foreground py-2">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm">&copy; 2024 NiFate.</p>
          <p className="text-xs md:text-sm">Evolution X Search project is not affiliated with {''}
            <Link href="https://github.com/Evolution-X" target="_blank">
              Evolution X Team
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
