import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PostAddCard({ auth, onAdd }) {
    return (
        <>
            <Card>
                <CardContent className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage
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
                    <Button
                        onClick={onAdd}
                        variant="outline"
                        className="flex-1 rounded-full text-start"
                        size="lg"
                    >
                        What's on your mind, {auth.user.username}?
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
