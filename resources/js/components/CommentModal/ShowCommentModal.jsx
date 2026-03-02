import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { route } from "ziggy-js";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ShowCommentModal({ open, onOpenChange, post }) {
    const { auth } = usePage().props;

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
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-md">
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

                        {/* Comments list could go here */}
                    </div>

                    {/* Footer */}
                    <div className="border-t p-2 flex gap-2 items-center">
                        <Input
                            placeholder="Write a comment..."
                            className="flex-1"
                        />
                        <Button>Send</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
