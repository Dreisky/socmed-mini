import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import ThemeToggle from "@/components/theme-toggle";

export default function Layout({ children, header }) {
    return (
        <SidebarProvider defaultOpen>
            <AppSidebar />

            <SidebarInset>
                <header className="flex justify-between items-center border-b h-14 px-6 w-full">
                    <div className="flex items-center">
                        <SidebarTrigger className="mr-2" />
                        <h2 className="ms4">{header}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <ThemeToggle /> */}
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                className="grayscale"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                <main className="flex-1 p-6 w-full">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
