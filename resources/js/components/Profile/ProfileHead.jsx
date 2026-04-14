import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { IconPencilFilled } from "@tabler/icons-react";

import { usePage } from "@inertiajs/react";

export default function PorfileHead() {
    const { auth } = usePage().props;

    return (
        <Card className="rounded-none border-none">
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-35 h-35">
                            <AvatarImage
                                className="object-cover"
                                src={
                                    auth.user.profile_picture
                                        ? `/storage/${auth.user.profile_picture}`
                                        : "https://github.com/shadcn.png"
                                }
                            />
                            <AvatarFallback className="text-sm font-medium">
                                CN
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-3xl font-bold">
                                Andrei Balabbo{" "}
                                <span className="font-light">
                                    ({auth.user.username})
                                </span>
                            </h1>
                            <p className="text-md font-semibold">67 Friends</p>
                            <p className="italic">Lives in Shit</p>
                        </div>
                    </div>
                    <div>
                        <Button variant="outline">
                            <IconPencilFilled /> Edit Profile
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
