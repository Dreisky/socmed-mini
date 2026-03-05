import Layout from "../Layout/Layout";

import LikeButton from "@/components/LikeButton";

import { Button } from "@/components/ui/button";
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

import { useState, useEffect } from "react";

import { Ellipsis, Pencil, Trash, ThumbsUp, MessageCircle } from "lucide-react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import { route } from "ziggy-js";

import { useForm, usePage } from "@inertiajs/react";

export default function Index({ posts }) {
    const { auth } = usePage().props;

    const [activePost, setActivePost] = useState(null);

    const [addPostModalOpen, setAddPostModalOpen] = useState(false);
    const [editPostModalOpen, setEditPostModalOpen] = useState(false);
    const [deletePostModalOpen, setDeletePostModalOpen] = useState(false);
    const [showCommentModalOpen, setShowCommentModalOpen] = useState(false);

    useEffect(() => {
        if (activePost) {
            const updatedPost = posts.find((p) => p.id === activePost.id);

            if (updatedPost) {
                setActivePost(updatedPost);
            }
        }
    }, [posts]);

    return (
        <>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className="space-y-3 border-e pe-6">
                    <Card>
                        <CardContent className="flex items-center gap-2">
                            <Avatar className="h-10 w-10">
                                <AvatarImage
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
                                                src={
                                                    post.user.profile_picture
                                                        ? `/storage/${post.user.profile_picture}`
                                                        : "https://github.com/shadcn.png"
                                                }
                                                alt="@shadcn"
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
                                <div className="border rounded-lg">
                                    <div className="p-4 text-justify">
                                        <p>{post.description}</p>
                                    </div>
                                    <div>
                                        {post.post_photo && (
                                            <img
                                                src={`/storage/${post.post_photo}`}
                                                alt=""
                                                className="mx-auto max-h-[400px] max-w-full object-contain"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="mt-4 flex items-center gap-2">
                                        {post.likes_count > 0 && (
                                            <>
                                                <ThumbsUp
                                                    size={14}
                                                    color="blue"
                                                />
                                                {post.likes_count}
                                            </>
                                        )}
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">
                                        {post.comments_count > 0 && (
                                            <p
                                                className="cursor-pointer hover:underline"
                                                onClick={() => {
                                                    setActivePost(post);
                                                    setShowCommentModalOpen(
                                                        true,
                                                    );
                                                }}
                                            >
                                                {post.comments_count} comments
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="grid w-full grid-cols-2 gap-2">
                                    <LikeButton post={post} />
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setActivePost(post);
                                            setShowCommentModalOpen(true);
                                        }}
                                    >
                                        <MessageCircle />
                                        Comment
                                    </Button>
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

            {activePost && (
                <ShowCommentModal
                    post={activePost}
                    open={showCommentModalOpen}
                    onOpenChange={setShowCommentModalOpen}
                />
            )}
        </>
    );
}

Index.layout = (page) => <Layout>{page}</Layout>;
