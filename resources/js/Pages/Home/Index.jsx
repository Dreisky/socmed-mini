import { Button } from "@/components/ui/button";
import { useForm, usePage } from "@inertiajs/react";
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
import { useState } from "react";
import AddPostModal from "../../components/PostModal/AddPostModal";
export default function Index({ posts }) {
    const { auth } = usePage().props;

    const [addPostModalOpen, setAddPostModalOpen] = useState(false);

    return (
        <>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className="space-y-3 border-e pe-6">
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
                                onClick={() => {
                                    setAddPostModalOpen(true);
                                }}
                                variant="outline"
                                className="flex-1 rounded-full text-start"
                            >
                                What's on your mind, {auth.user.username}?
                            </Button>
                        </CardContent>
                    </Card>

                    {/* POSTS */}

                    {posts.map((post) => (
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
                                        <p className="text-sm font-semibold">
                                            {post.user.username}
                                        </p>
                                        <p className="text-xs font-light">
                                            {new Date(
                                                post.created_at,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="p-8 text-center border rounded-lg">
                                    {post.description}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="grid w-full grid-cols-2 gap-2">
                                    <Button variant="ghost">Like</Button>
                                    <Button variant="ghost">Comment</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div>
                    <p>Under Dev...</p>
                </div>
            </div>

            <AddPostModal
                open={addPostModalOpen}
                onOpenChange={setAddPostModalOpen}
            />
        </>
    );
}

Index.layout = (page) => <Layout>{page}</Layout>;
