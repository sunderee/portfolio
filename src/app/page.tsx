'use client';

import MasterContainer from "@/components/master-container";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();

  return <MasterContainer>
    <div className={`flex flex-col items-center justify-center ${isMobile ? 'h-[calc(100vh-28px)] w-screen' : 'h-screen w-[720px]'}`}>
      <h1 className="text-2xl font-bold">Peter Aleksander Bizjak</h1>
      <p className="text-md text-muted-foreground">Software Developer. Cybersecurity Specialist. Consultant.</p>
    </div>
  </MasterContainer>
}
