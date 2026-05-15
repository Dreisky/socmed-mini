import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { IconPencilFilled } from "@tabler/icons-react";

import { usePage, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function PorfileHead({ auth, user }) {
    const { is_follower, is_following, followers_count, following_count } =
        usePage().props;

    const { post } = useForm();

    const toggleFollow = (e) => {
        e.preventDefault();
        post(
            route("follow.toggle", {
                username: user.username,
            }),
        );
    };

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
                            <div className="flex gap-4">
                                <p className="text-md font-semibold">
                                    {followers_count ?? 0} Followers
                                </p>
                                <p className="text-md font-semibold">
                                    {following_count ?? 0} Following
                                </p>
                            </div>
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
                        <Button onClick={toggleFollow}>
                            {is_following
                                ? "Unfollow"
                                : is_follower
                                  ? "Follow Back"
                                  : "Follow"}
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
