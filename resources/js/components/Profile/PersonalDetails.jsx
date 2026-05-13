import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import {
    IconMapPin,
    IconPencil,
    IconCake,
    IconBriefcase2,
} from "@tabler/icons-react";
import { route } from "ziggy-js";

export default function PersonalDetails({ auth, user }) {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-lg">Personal Details</h1>
                        {auth.user && auth.user.username === user.username && (
                            <Link
                                href={route("profile.edit", {
                                    username: user.username,
                                })}
                            >
                                <Button variant="ghost">
                                    <IconPencil />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="space-y-4 mt-4">
                    {user.birthdate && (
                        <div className="flex items-center gap-3">
                            <IconCake />
                            {user.birthdate}
                        </div>
                    )}

                    {user.occupation && (
                        <div className="flex items-center gap-3">
                            <IconBriefcase2 />
                            <span className="capitalize">
                                {user.occupation}
                            </span>
                        </div>
                    )}

                    {user.address && (
                        <div className="flex items-center gap-3">
                            <IconMapPin />
                            <span className="capitalize">{user.address}</span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
