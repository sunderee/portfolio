'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import { ROUTES } from "@/lib/constants";
import { LayoutProps } from "@/types/ui";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppSidebar from "./app-sidebar";
import { Button } from "./ui/button";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function MasterContainer({ children }: LayoutProps) {
    const isMobile = useIsMobile();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => setMounted(true), []);

    const defaultIcon = '/icon-black.svg';
    const coffeeIcon = !mounted
        ? defaultIcon
        : (resolvedTheme === 'dark'
            ? '/icon-white.svg'
            : '/icon-black.svg');

    if (!mounted) {
        return <div className="min-h-screen">{children}</div>;
    }

    return isMobile
        ? <>
            <SidebarProvider>
                <AppSidebar />
                <main className="flex flex-col">
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </>
        : <>
            <div className="mt-2 flex flex-col justify-center items-center">
                <div className="flex flex-row justify-between w-[600px]">
                    <Image src={coffeeIcon} alt="Logo" width={32} height={32} />
                    <div className="flex flex-row">
                        <Link href={ROUTES.HOME}><Button variant="ghost">Home</Button></Link>
                        <Link href={ROUTES.ABOUT}><Button variant="ghost">About</Button></Link>
                        <Link href={ROUTES.SERVICES}><Button variant="ghost">Services</Button></Link>
                        <Button variant="ghost">Contact</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-start">
                <div className="w-[720px]">
                    {children}
                </div>
            </div>
        </>
}
