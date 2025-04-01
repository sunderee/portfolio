'use client';

import MasterContainer from "@/components/master-container";
import MasterHeader from "@/components/master-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export default function ServicesPage() {
    const isMobile = useIsMobile();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const layoutClass = mounted
        ? `flex flex-col space-y-4 ${isMobile ? 'px-4 mb-4 w-screen' : 'mb-4 w-[720px]'}`
        : 'flex flex-col min-h-screen space-y-4 px-4 mb-4 mt-4';

    return <MasterContainer>
        <div className={layoutClass}>
            <MasterHeader title="Services" subtitle="Expert solutions tailored to your specific needs." />
            <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold">Software Development</h2>
                <ServiceCard
                    title="Mobile Application Development"
                    description="Delivering high-performance mobile solutions across platforms. Expert development using Flutter for cross-platform efficiency, and native development with Kotlin/Java (Android) and Swift/SwiftUI (iOS) for platform-specific optimization."
                />
                <ServiceCard
                    title="Backend Development"
                    description="Building robust, scalable server architectures using modern technologies including Go and TypeScript with Nest.js framework. Solutions designed for security, performance, and seamless integration."
                />
                <ServiceCard
                    title="Frontend Development"
                    description="Creating responsive, intuitive user interfaces using React, Next.js, and Angular. Development focused on exceptional user experience with clean, maintainable code."
                />
            </div>
            <div className="flex flex-col space-y-4 mt-8">
                <h2 className="text-2xl font-bold">Cybersecurity</h2>
                <ServiceCard
                    title="Penetration Testing"
                    description="Comprehensive security assessments performed by a certified ethical hacker. Identifying vulnerabilities before they can be exploited, with detailed remediation steps."
                />
                <ServiceCard
                    title="Security Audits"
                    description="Thorough evaluation of your organization's security posture against industry standards and best practices. Actionable recommendations to strengthen your defensive capabilities."
                />
                <ServiceCard
                    title="Regulatory Compliance"
                    description="Expert guidance navigating cybersecurity and data privacy regulations. Ensuring your systems and processes meet applicable legal requirements while maintaining operational efficiency."
                />
            </div>
            <div className="flex flex-col space-y-4 mt-8">
                <h2 className="text-2xl font-bold">Consulting & Content</h2>
                <ServiceCard
                    title="Technical Consulting"
                    description="Strategic technical advisory services for digital transformation initiatives. Independent evaluation of architectures, systems, and processes to identify optimization opportunities."
                />
                <ServiceCard
                    title="Technical Writing"
                    description="Clear, accurate documentation and content creation for technical audiences. From user guides and API documentation to whitepapers and technical blog posts."
                />
            </div>

            <Button className="mt-8">Get in touch</Button>
        </div>
    </MasterContainer>
}

function ServiceCard({ title, description }: { title: string, description: string }) {
    return <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
    </Card>
}