import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { IconPencilFilled } from "@tabler/icons-react";

export default function PorfileHead({ auth, user }) {
    return (
        <Card className="rounded-none rounded-b-xl  border-none">
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
                                {user.firstname} {user.lastname}
                                <span className="ms-2 font-light">
                                    ({user.username})
                                </span>
                            </h1>
                            <p className="text-md font-semibold">67 Friends</p>
                        </div>
                    </div>

                    {/* Edit Profile Button */}
                    {auth.user && auth.user.username === user.username && (
                        <div>
                            <Link
                                href={route("profile.edit", {
                                    username: auth.user.username,
                                })}
                            >
                                <Button variant="outline">
                                    <IconPencilFilled /> Edit Profile
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* Follow Button */}
                    {auth.user.username !== user.username && (
                        <Button>
                            <IconPencilFilled /> Follow
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
