import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash, ThumbsUp, MessageCircle } from "lucide-react";

import LikeButton from "@/components/Post/LikeButton";
import { useEffect, useRef, useState } from "react";

export default function PostCard({ post, auth, onEdit, onDelete, onComment }) {
    const isOwner = auth.user.id === post.user.id;

    const ref = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [isClampled, setIsClamped] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }, []);

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between capitalize">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage
                                className="object-cover"
                                src={
                                    post.user.profile_picture
                                        ? `/storage/${post.user.profile_picture}`
                                        : "https://github.com/shadcn.png"
                                }
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="font-semibold text-md">
                                {post.user.username}
                            </p>

                            <p className="text-xs italic font-light">
                                {new Date(post.created_at).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    {isOwner && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost">
                                    <Ellipsis />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => onEdit(post)}>
                                    <Pencil /> Edit
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    variant="destructive"
                                    onClick={() => onDelete(post)}
                                >
                                    <Trash /> Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </CardHeader>

            <CardContent>
                <div className="border rounded-lg">
                    <div className="p-4 ">
                        <p
                            ref={ref}
                            className={`text-justify whitespace-pre-wrap ${!expanded ? "line-clamp-3" : ""}`}
                        >
                            {post.description}
                        </p>

                        {!expanded && isClampled && (
                            <Button
                                variant="link"
                                className="p-0"
                                onClick={() => setExpanded(!expanded)}
                            >
                                See More
                            </Button>
                        )}
                    </div>

                    {post.post_photo && (
                        <img
                            src={`/storage/${post.post_photo}`}
                            className="mx-auto max-h-100 max-w-full object-contain"
                        />
                    )}
                </div>

                <div className="flex justify-between mt-4">
                    <div>
                        {post.likes_count > 0 && (
                            <div className="flex items-center gap-2">
                                <ThumbsUp size={14} color="blue" />
                                {post.likes_count}
                            </div>
                        )}
                    </div>

                    {post.comments_count > 0 && (
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => onComment(post)}
                        >
                            {post.comments_count}{" "}
                            {post.comments_count > 1 ? "comments" : "comment"}
                        </p>
                    )}
                </div>
            </CardContent>

            <CardFooter>
                <div className="grid w-full grid-cols-2 gap-2">
                    <LikeButton post={post} />

                    <Button variant="ghost" onClick={() => onComment(post)}>
                        <MessageCircle />
                        Comment
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
