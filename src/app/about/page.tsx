'use client';

import MasterContainer from "@/components/master-container";
import MasterHeader from "@/components/master-header";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const isMobile = useIsMobile();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const layoutClass = mounted
        ? `flex flex-col space-y-4 ${isMobile ? 'px-4 mb-4 w-screen' : 'mb-4 w-[720px]'}`
        : 'flex flex-col min-h-screen space-y-4 px-4 mb-4 mt-4';

    return <MasterContainer>
        <div className={layoutClass}>
            <MasterHeader title="About" />
            <p>At the intersection of software engineering and cybersecurity, I bring a unique perspective that bridges technical excellence with strategic vision. Based in Slovenia and working globally, I've built my career on delivering solutions that are not only technically sound but also aligned with business objectives.</p>
            <p>With experience spanning mobile development, full-stack engineering, and cybersecurity, I've worked with diverse organizations across Europe, from startups to established enterprises. This breadth of experience has honed my ability to quickly understand complex technical environments and provide targeted solutions that drive measurable results.</p>
            <p>My approach combines technical rigor with clear communication. I believe the most successful technical implementations begin with a thorough understanding of business context—translating complex technical concepts into language that resonates with decision-makers is a cornerstone of my professional practice.</p>
            <p>Whether developing scalable applications, conducting penetration tests, or providing strategic consultation, I bring the same commitment to excellence and attention to detail. I thrive in environments where technical challenges intersect with business innovation, finding elegant solutions where others see only complexity.</p>
            <h2 className="mt-4 text-2xl font-bold">Mission statement</h2>
            <p>I am committed to:</p>
            <ul className="list-disc list-inside">
                <li className="ml-4 mt-2"><b>Technical Excellence</b> –  Delivering solutions built on industry best practices with meticulous attention to security and scalability</li>
                <li className="ml-4 mt-2"><b>Strategic Partnership</b> –  Understanding the unique context of each organization to provide tailored technical guidance that aligns with business objectives</li>
                <li className="ml-4 mt-2"><b>Knowledge Transfer</b> – Empowering clients with the insights and understanding needed to maintain and build upon implemented solutions</li>
                <li className="ml-4 mt-2"><b>Continuous Innovation</b> – Staying at the forefront of technological advancement to bring forward-thinking approaches to each engagement</li>
            </ul>
            <p>By combining deep technical expertise with business acumen, I help organizations navigate digital complexity with confidence and clarity.</p>
        </div>
    </MasterContainer>
}