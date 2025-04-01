'use client';

import MasterContainer from "@/components/master-container";
import MasterHeader from "@/components/master-header";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const isMobile = useIsMobile();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const layoutClass = mounted
        ? `flex flex-col space-y-4 ${isMobile ? 'px-4 mb-4 w-screen' : 'mb-4 w-[720px]'}`
        : 'flex flex-col min-h-screen space-y-4 px-4 mb-4 mt-4';

    return <MasterContainer>
        <div className={layoutClass}>
            <MasterHeader
                title="Contact"
                subtitle="I welcome inquiries about potential collaborations and am committed to responding promptly to all professional correspondence."
            />

            <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <p>The best way to reach out is via email.</p>
                <div className="flex flex-row gap-4">
                    <Mail />
                    <a href="mailto:peter.aleksander@bizjak.dev&subject=Engagement" className="hover:underline">peter.aleksander@bizjak.dev</a>
                </div>
            </div>

            <div className="flex flex-col space-y-4 mt-8">
                <h2 className="text-2xl font-bold">Professional Engagements</h2>
                <p>As a professional who values discretion, I maintain strict confidentiality regarding client work. While many of my projects operate under non-disclosure agreements, I'm happy to discuss:</p>
                <ul className="list-disc list-inside">
                    <li className="ml-4 mt-2">Relevant expertise and capabilities for your specific needs</li>
                    <li className="ml-4 mt-2">General approaches to solving challenges similar to yours</li>
                    <li className="ml-4 mt-2">Working methodologies and collaboration frameworks</li>
                    <li className="ml-4 mt-2">References from past clients (upon request and with their permission)</li>
                </ul>
                <p>I am looking forward to exploring how my expertise in software development, cybersecurity, and technical consulting can contribute to your organization's success.</p>
            </div>

            <Separator />

            <span className="text-sm text-muted-foreground">For B2B engagements, I operate through my registered Slovenian business entity, enabling streamlined contracting and compliance with EU business regulations.</span>
        </div>
    </MasterContainer>
}