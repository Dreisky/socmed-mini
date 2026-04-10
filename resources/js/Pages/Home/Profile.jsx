import Layout from "../Layout/Layout";

import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import CoverPhoto from "@/components/Profile/CoverPhoto";

import FadeIn from "@/components/Animation/FadeIn";

import { usePage } from "@inertiajs/react";

import { IconFileText } from "@tabler/icons-react";
import { RefreshCcwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";
import PostCard from "@/components/Post/PostCard";
import PostAddCard from "@/components/Post/PostAddCard";

export default function Profile({ posts }) {
    const { auth } = usePage().props;

    const [activePost, setActivePost] = useState(null);

    const [addPostModalOpen, setAddPostModalOpen] = useState(false);
    const [editPostModalOpen, setEditPostModalOpen] = useState(false);
    const [deletePostModalOpen, setDeletePostModalOpen] = useState(false);
    const [showCommentModalOpen, setShowCommentModalOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleRefresh = () => {
        setLoading(true);
        router.reload({
            only: ["posts"],
            onFinish: () => setLoading(false),
        });
    };

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
            <div className="max-w-7xl mx-auto space-y-3">
                <CoverPhoto />

                <div className="w-full">
                    <div className="grid grid-cols-5 w-full gap-3">
                        <div className="col-span-2">
                            <PostAddCard
                                auth={auth}
                                onAdd={() => {
                                    setAddPostModalOpen(true);
                                }}
                            />
                        </div>
                        <div className="space-y-3 col-span-3">
                            {/* POST ADD CARD */}
                            <PostAddCard
                                auth={auth}
                                onAdd={() => {
                                    setAddPostModalOpen(true);
                                }}
                            />

                            {/* POSTS */}
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
            </div>
        </>
    );
}

Profile.layout = (page) => <Layout padding="p-0">{page}</Layout>;
