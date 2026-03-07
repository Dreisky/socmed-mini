import Layout from "../Layout/Layout";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useState, useEffect } from "react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import { useForm, usePage } from "@inertiajs/react";
import PostCard from "@/components/Post/PostCard";

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
                        <PostCard
                            key={post.id}
                            post={post}
                            auth={auth}
                            onEdit={(post) => {
                                setActivePost(post);
                                setEditPostModalOpen(true);
                            }}
                            onDelete={(post) => {
                                setActivePost(post);
                                setDeletePostModalOpen(true);
                            }}
                            onComment={(post) => {
                                setActivePost(post);
                                setShowCommentModalOpen(true);
                            }}
                        />
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
