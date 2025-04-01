import { useIsMobile } from "@/hooks/use-mobile";
import { LayoutProps } from "@/types/ui";
import { useTheme } from "next-themes";
import Image from "next/image";
import AppSidebar from "./app-sidebar";
import { Button } from "./ui/button";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function MasterContainer({ children }: LayoutProps) {
    const isMobile = useIsMobile();
    const { resolvedTheme } = useTheme();

    const coffeeIcon = resolvedTheme === 'dark'
        ? '/icon-white.svg'
        : '/icon-black.svg';

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
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Services</Button>
                        <Button variant="ghost">Process</Button>
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
