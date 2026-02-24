import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import Layout from "../Layout/Layout";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Index() {
    return (
        <>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className="border-e pe-6 space-y-3">
                    <Card>
                        <CardContent className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Button
                                variant="outline"
                                className="flex-1 text-start rounded-full"
                            >
                                What's on your mind, Shad?
                            </Button>
                        </CardContent>
                    </Card>

                    {/* POSTS */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                        className="grayscale"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm">
                                        Shad Cn
                                    </p>
                                    <p className="font-light text-xs">
                                        January 12, 2021
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="border rounded-sm text-center p-8">
                                hello
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="grid grid-cols-2 w-full gap-2">
                                <Button variant="ghost">Like</Button>
                                <Button variant="ghost">Comment</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <p>Under Dev...</p>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <Layout>{page}</Layout>;
