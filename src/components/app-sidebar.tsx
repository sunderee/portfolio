import { ROUTES } from "@/lib/constants";
import { BriefcaseIcon, ClockIcon, Home, MailIcon, UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

export default function AppSidebar() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const defaultIcon = '/icon-black.svg';
    const coffeeIcon = !mounted
        ? defaultIcon
        : (resolvedTheme === 'dark'
            ? '/icon-white.svg'
            : '/icon-black.svg');

    return (
        <Sidebar>
            <SidebarHeader>
                <Image src={coffeeIcon} alt="Logo" width={32} height={32} />
                <span className="text-md text-muted-foreground">Fancy a cup?</span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={ROUTES.HOME}>
                                <Home />
                                <span>Home</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={ROUTES.ABOUT}>
                                <UserIcon />
                                <span>About</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <BriefcaseIcon />
                            <span>Services</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <ClockIcon />
                            <span>Process</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <MailIcon />
                            <span>Contact</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}