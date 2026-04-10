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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { IconHeartFilled } from "@tabler/icons-react";
import { Ellipsis, Pencil, Trash, ThumbsUp, MessageCircle } from "lucide-react";
import LikeButton from "@/components/Post/LikeButton";
import { useEffect, useRef, useState } from "react";

export default function PostCard({ post, auth, onEdit, onDelete, onComment }) {
    const isOwner = auth.user.id === post.user.id;
    const ref = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }, []);

    return (
        <Card className="overflow-hidden gap-2 rounded-lg border border-border shadow-sm bg-card max-w-[875px]">
            {/* Header */}
            <CardHeader className="px-4 space-y-0">
                <div className="flex items-start justify-between">
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
                            <AvatarFallback className="text-sm font-medium">
                                {post.user.username?.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-sm leading-tight capitalize">
                                {post.user.username}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {new Date(post.created_at).toLocaleString(
                                    undefined,
                                    {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    },
                                )}
                            </p>
                        </div>
                    </div>

                    {isOwner && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 rounded-full text-muted-foreground"
                                >
                                    <Ellipsis size={18} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36">
                                <DropdownMenuItem
                                    className="gap-2 cursor-pointer"
                                    onClick={() => onEdit(post)}
                                >
                                    <Pencil size={14} /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    variant="destructive"
                                    className="gap-2 cursor-pointer"
                                    onClick={() => onDelete(post)}
                                >
                                    <Trash size={14} /> Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-0">
                {/* Description */}
                {post.description && (
                    <div className="px-4">
                        <p
                            ref={ref}
                            className={`text-sm leading-relaxed whitespace-pre-wrap ${!expanded ? "line-clamp-5" : ""}`}
                        >
                            {post.description}
                        </p>
                        {!expanded && isClamped && (
                            <button
                                className="text-xs text-muted-foreground hover:underline mt-0.5"
                                onClick={() => setExpanded(true)}
                            >
                                See more
                            </button>
                        )}
                    </div>
                )}

                {/* Image */}
                {post.post_photo && (
                    <>
                        <img
                            src={`/storage/${post.post_photo}`}
                            className="w-full max-h-150 object-contain cursor-pointer pt-2"
                            alt="Post photo"
                            onClick={() => setImageOpen(true)}
                        />

                        <Dialog open={imageOpen} onOpenChange={setImageOpen}>
                            <DialogContent className="!max-w-none w-screen h-screen bg-black p-0 border-none flex items-center justify-center">
                                <img
                                    src={`/storage/${post.post_photo}`}
                                    className="w-full h-full object-contain"
                                    alt="Post photo"
                                />
                            </DialogContent>
                        </Dialog>
                    </>
                )}

                {/* Stats row — likes count + comments count */}
                {(post.likes_count > 0 || post.comments_count > 0) && (
                    <div className="flex items-center justify-between px-4 py-1.5 pt-3 text-md text-muted-foreground">
                        {post.likes_count > 0 ? (
                            <div className="flex items-center gap-1">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500">
                                    <IconHeartFilled size={14} color="white" />
                                </span>
                                <span>{post.likes_count}</span>
                            </div>
                        ) : (
                            <span />
                        )}

                        {post.comments_count > 0 && (
                            <button
                                className="hover:underline"
                                onClick={() => onComment(post)}
                            >
                                {post.comments_count}{" "}
                                {post.comments_count === 1
                                    ? "comment"
                                    : "comments"}
                            </button>
                        )}
                    </div>
                )}
            </CardContent>

            {/* Footer Actions */}
            <CardFooter className="px-2 py-1">
                <div className="grid w-full grid-cols-2">
                    <LikeButton post={post} />
                    <Button
                        variant="ghost"
                        className="gap-2 text-md text-muted-foreground hover:bg-accent font-medium rounded-md h-10"
                        onClick={() => onComment(post)}
                    >
                        <MessageCircle size={22} />
                        Comment
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
