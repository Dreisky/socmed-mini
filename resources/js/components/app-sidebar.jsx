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
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    SettingsIcon,
    LogOutIcon,
    UserIcon,
    MessageSquareDot,
    Home,
    Users,
    EllipsisVertical,
    MessageCircleMore,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useForm, usePage } from "@inertiajs/react";
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
                        // src="https://github.com/shadcn.png"
                        className="object-cover"
                        src={
                            auth.user.profile_picture
                                ? `/storage/${auth.user.profile_picture}`
                                : "https://github.com/shadcn.png"
                        }
                        alt="@shadcn"
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
                                    isActive={route().current("home.index")}
                                >
                                    <Link href={route("home.index")}>
                                        <Home className=" mr-2" />
                                        Home
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={url.startsWith("/clients")}
                                >
                                    <Link href="/clients">
                                        <Users className=" mr-2" />
                                        Friends
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/reports">
                                        <MessageCircleMore className="mr-2" />
                                        Messages
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* <SidebarGroup>
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
                </SidebarGroup> */}
            </SidebarContent>

            <SidebarFooter>
                <DropdownMenu className="w-full">
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center justify-between p-2 rounded-sm hover:bg-muted">
                            <div className="flex items-center gap-2">
                                <Avatar className="rounded-md w-8 h-8">
                                    <AvatarImage
                                        src={
                                            auth.user.profile_picture
                                                ? `/storage/${auth.user.profile_picture}`
                                                : "https://github.com/shadcn.png"
                                        }
                                        className="grayscale object-cover"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center leading-4">
                                    <p className="m-0 font-semibold">
                                        {auth.user.username}
                                    </p>
                                    <p className="m-0 text-xs opacity-50">
                                        {auth.user.email}
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
                            <Avatar className="rounded-md w-8 h-8">
                                <AvatarImage
                                    className="object-cover"
                                    src={
                                        auth.user.profile_picture
                                            ? `/storage/${auth.user.profile_picture}`
                                            : "https://github.com/shadcn.png"
                                    }
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col justify-center">
                                <p className="font-semibold">
                                    {auth.user.username}
                                </p>
                                <p className="text-xs opacity-50">
                                    {auth.user.email}
                                </p>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <UserIcon />
                            <Link href={route("profile.index")}>Profile</Link>
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
