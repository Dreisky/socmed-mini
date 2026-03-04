import Modal from "@/components/Modal";
import AddCommentModal from "@/components/CommentModal/AddCommentModal";
import { Input } from "@/components/ui/input";
import { useForm, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { route } from "ziggy-js";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ShowCommentModal({ open, onOpenChange, post }) {
    const { auth } = usePage().props;

    const [comments, setComments] = useState(post?.comments || []);

    useEffect(() => {
        setComments(post?.comments || []);
    }, [post]);

    return (
        <>
            <Modal
                open={open}
                onOpenChange={onOpenChange}
                title={
                    post?.user?.id === auth.user.id
                        ? "Your Post"
                        : `${post?.user?.username}'s Post`
                }
            >
                <div className="flex flex-col h-[60vh]">
                    {/* h-[60vh] or whatever max height you want */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {/* Scrollable post content */}
                        <div className="flex items-center gap-2">
                            <Avatar className="h-10 w-10">
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
                                <p className="font-semibold text-md capitalize">
                                    {post?.user?.username}
                                </p>
                                <p className="text-xs italic font-light">
                                    {post?.created_at &&
                                        new Date(
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

                        <div className="p-4 border rounded-md">
                            {post?.description}
                        </div>

                        {/* Comments here */}
                        <p className="opacity-50 text-sm italic">Comments:</p>
                        <div className="flex flex-col gap-2">
                            {comments.map((comment) => (
                                <div key={comment.id} className="flex gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src={
                                                comment.user.profile_picture
                                                    ? `/storage/${comment.user.profile_picture}`
                                                    : "https://github.com/shadcn.png"
                                            }
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="w-full">
                                        <Card className="w-full p-2">
                                            <CardContent className="px-2 text-sm">
                                                <p className="font-semibold capitalize">
                                                    {comment.user?.username}
                                                </p>
                                                <p>{comment.comment}</p>
                                            </CardContent>
                                        </Card>
                                        <p className="text-xs italic font-light my-2">
                                            {post?.created_at &&
                                                new Date(
                                                    comment.created_at,
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
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <AddCommentModal post={post} />
                </div>
            </Modal>
        </>
    );
}
