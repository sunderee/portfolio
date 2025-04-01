import { useIsMobile } from "@/hooks/use-mobile";
import { LayoutProps } from "@/types/ui";
import AppSidebar from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function MasterContainer({ children }: LayoutProps) {
    const isMobile = useIsMobile();

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
        : <div className="flex flex-row justify-center items-start w-full h-full">
            <div className="w-[720px]">
                {children}
            </div>
        </div>
}
