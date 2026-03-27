import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import FlashToast from "@/components/FlashToast";
import ThemeToggle from "@/components/theme-toggle";

export default function Layout({ children, header }) {
    return (
        <SidebarProvider defaultOpen>
            <Toaster position="top-right" richColors />

            <AppSidebar />

            <SidebarInset>
                <header className="flex justify-between items-center border-b h-14 px-6 w-full">
                    <div className="flex items-center">
                        <SidebarTrigger className="mr-2" />
                        <h2 className="ms4">{header}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <ThemeToggle /> */}
                        {/* <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                className="grayscale"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar> */}
                        <ThemeToggle />
                        <InputGroup className="max-w-xs">
                            <InputGroupInput placeholder="Search..." />
                            <InputGroupAddon>
                                <Search />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                12 results
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </header>

                <main className="flex-1 p-6 w-full">
                    <FlashToast />

                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
