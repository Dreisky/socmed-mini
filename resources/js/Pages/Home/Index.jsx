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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import AddPostModal from "../../components/PostModal/AddPostModal";
import { Ellipsis, Pencil, Trash } from "lucide-react";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";

export default function Index({ posts }) {
    const { auth } = usePage().props;

    const [activePost, setActivePost] = useState(null);

    const [addPostModalOpen, setAddPostModalOpen] = useState(false);
    const [editPostModalOpen, setEditPostModalOpen] = useState(false);
    const [deletePostModalOpen, setDeletePostModalOpen] = useState(false);

    return (
        <>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className="space-y-3 border-e pe-6">
                    <Card>
                        <CardContent className="flex items-center gap-2">
                            <Avatar className="h-10 w-10">
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
                                size="lg"
                            >
                                What's on your mind, {auth.user.username}?
                            </Button>
                        </CardContent>
                    </Card>

                    {/* POSTS */}

                    {posts.map((post) => (
                        <Card key={post.id}>
                            <CardHeader>
                                <div className="flex items-center justify-between capitalize">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="w-10 h-10">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                                className="grayscale"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-md">
                                                {post.user.username}
                                            </p>
                                            <p className="text-xs italic font-light">
                                                {new Date(
                                                    post.created_at,
                                                ).toLocaleString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        {auth.user.id === post.user.id && (
                                            <div>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button variant="ghost">
                                                            <Ellipsis />
                                                        </Button>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                setActivePost(
                                                                    post,
                                                                );
                                                                setEditPostModalOpen(
                                                                    true,
                                                                );
                                                            }}
                                                        >
                                                            <Pencil />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            variant="destructive"
                                                            onClick={() => {
                                                                setActivePost(
                                                                    post,
                                                                );
                                                                setDeletePostModalOpen(
                                                                    true,
                                                                );
                                                            }}
                                                        >
                                                            <Trash />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        )}
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
            <EditPostModal
                post={activePost}
                open={editPostModalOpen}
                onOpenChange={setEditPostModalOpen}
            />
            <DeletePostModal
                post={activePost}
                open={deletePostModalOpen}
                onOpenChange={setDeletePostModalOpen}
            />
        </>
    );
}

Index.layout = (page) => <Layout>{page}</Layout>;
