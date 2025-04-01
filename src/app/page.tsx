'use client';

import MasterContainer from "@/components/master-container";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ROUTES } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const layoutClass = mounted
    ? `flex flex-col items-center justify-center ${isMobile ? 'h-[calc(100vh-28px)] w-screen px-4' : 'h-[calc(100vh-44px)] w-[720px]'}`
    : 'flex flex-col items-center justify-center min-h-screen px-4';

  return <MasterContainer>
    <div className={layoutClass}>
      <h1 className="text-4xl font-bold text-center">Peter Aleksander Bizjak</h1>
      <p className="text-lg text-muted-foreground text-center">Software Developer. Cybersecurity Specialist. Consultant.</p>
      <p className="mt-4 text-lg text-center text-muted-foreground">I help businesses build secure, robust, and efficient software solutions that solve real-world problems and drive growth.</p>

      <div className="mt-12 flex flex-row gap-4">
        <Link href={ROUTES.SERVICES}><Button variant="outline">What can I do for you?</Button></Link>
        <Link href={ROUTES.CONTACT}><Button variant="default">Get in touch today</Button></Link>
      </div>
    </div>
  </MasterContainer>
}
