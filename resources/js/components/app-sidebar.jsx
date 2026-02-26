import {
    Sidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import { CreditCardIcon } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { LogOutIcon } from "lucide-react";
import { Codesandbox } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquareDot } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Home, Users, FileText } from "lucide-react";
import { route } from "ziggy-js";

export function AppSidebar() {
    const { url } = usePage();
    const { auth } = usePage().props;

    const { delete: destroy, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("user.logout"));
    };

    return (
        <Sidebar>
            <SidebarHeader className="flex items-center justify-center px-4 py-6 border-b">
                <Avatar className="w-28 h-28">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="grayscale"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <p className="mt-4 mb-0 text-xl font-bold uppercase">
                        {auth.user.username}
                    </p>
                    <p className="text-xs italic font-light">
                        {auth.user.email}
                    </p>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Manage</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={route().current(
                                        "client.dashboard",
                                    )}
                                >
                                    <Link href="/">
                                        <Home className="w-4 h-4 mr-2" />
                                        Dashboard
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={url.startsWith("/clients")}
                                >
                                    <Link href="/clients">
                                        <Users className="w-4 h-4 mr-2" />
                                        Clients
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/reports">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Reports
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Budget</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={route().current("budget.track")}
                                >
                                    <Link href="/track">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Track
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <DropdownMenu className="w-full">
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center justify-between p-2 rounded-sm hover:bg-muted">
                            <div className="flex items-center gap-2">
                                <Avatar className="rounded-md">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        className="grayscale"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center leading-4">
                                    <p className="m-0 font-semibold">shadCn</p>
                                    <p className="m-0 text-xs opacity-50">
                                        scn@example.com
                                    </p>
                                </div>
                            </div>
                            <div>
                                <EllipsisVertical
                                    size={18}
                                    className="opacity-75"
                                />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" className="mb-2 w-60">
                        <DropdownMenuItem>
                            <Avatar className="rounded-md">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col justify-center">
                                <p className="font-semibold">shadCn</p>
                                <p className="text-xs opacity-50">
                                    scn@example.com
                                </p>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <UserIcon />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <SettingsIcon />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <MessageSquareDot />
                            Notifications
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <form onSubmit={handleSubmit}>
                            <DropdownMenuItem asChild variant="destructive">
                                <button
                                    type="submit"
                                    className="flex items-center w-full gap-2 py-3"
                                >
                                    <LogOutIcon />
                                    Log out
                                </button>
                            </DropdownMenuItem>
                        </form>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
