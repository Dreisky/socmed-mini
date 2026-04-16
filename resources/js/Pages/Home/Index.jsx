import Layout from "../Layout/Layout";

import { useState, useEffect } from "react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import FadeIn from "@/components/Animation/FadeIn";

import { usePage } from "@inertiajs/react";
import PostCard from "@/components/Post/PostCard";
import PostAddCard from "@/components/Post/PostAddCard";

import SkeletonPostAddCard from "@/components/Skeleton/SkeletonPostAddCard";
import SkeletonPostCard from "@/components/Skeleton/SkeletonPostCard";

export default function Index({ posts }) {
    const { auth } = usePage().props;
    const [isLoading, setIsLoading] = useState(true);
    const [addPostModalOpen, setAddPostModalOpen] = useState(false);
    const [editPostModalOpen, setEditPostModalOpen] = useState(false);
    const [deletePostModalOpen, setDeletePostModalOpen] = useState(false);
    const [showCommentModalOpen, setShowCommentModalOpen] = useState(false);
    const [activePost, setActivePost] = useState(null);

    useEffect(() => {
        if (posts) {
            setTimeout(() => setIsLoading(false), 400);
        }
    }, [posts]);

    if (isLoading)
        return (
            <>
                <div className="space-y-3">
                    <SkeletonPostAddCard />
                    <SkeletonPostCard />
                    <SkeletonPostCard />
                    <SkeletonPostCard />
                </div>
            </>
        );

    return (
        <>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className="space-y-3 w-full max-w-5xl mx-auto">
                    <PostAddCard
                        auth={auth}
                        onAdd={() => setAddPostModalOpen(true)}
                    />
                    {posts.map((post, index) => (
                        <FadeIn key={post.id} index={index}>
                            <PostCard
                                post={post}
                                auth={auth}
                                onEdit={() => {
                                    setActivePost(post);
                                    setEditPostModalOpen(true);
                                }}
                                onDelete={() => {
                                    setActivePost(post);
                                    setDeletePostModalOpen(true);
                                }}
                                onComment={() => {
                                    setActivePost(post);
                                    setShowCommentModalOpen(true);
                                }}
                            />
                        </FadeIn>
                    ))}
                </div>
                <div className="border-s px-4">
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
