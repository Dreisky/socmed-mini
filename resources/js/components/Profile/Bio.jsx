import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { IconHandLoveYou, IconPencil } from "@tabler/icons-react";

export default function Bio({ auth, user }) {
    return (
        <Card>
            <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Bio</h1>
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

                <p className="text-center">{user.bio}</p>
            </CardContent>
        </Card>
    );
}
