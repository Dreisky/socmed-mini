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
                <div className="border-e pe-6">
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
                            <Input placeholder="Enter text" />
                        </CardContent>
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
