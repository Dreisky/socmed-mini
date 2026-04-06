import Layout from "../Layout/Layout";

import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import FadeIn from "@/components/Animation/FadeIn";

import ProfilePostCard from "@/components/Post/ProfilePostCard";
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
            <div>
                <div className="space-y-3">
                    {posts.length === 0 && (
                        <Empty className="h-full">
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <IconFileText />
                                </EmptyMedia>
                                <EmptyTitle>No Post Yet</EmptyTitle>
                                <EmptyDescription className="max-w-xs text-pretty">
                                    You haven’t shared anything yet. Your posts
                                    will appear here once you create one.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button
                                    variant="outline"
                                    onClick={handleRefresh}
                                    disabled={loading}
                                >
                                    <RefreshCcwIcon
                                        className={
                                            loading ? "animate-spin" : ""
                                        }
                                    />
                                    {loading ? "Refreshing..." : "Refresh"}
                                </Button>
                            </EmptyContent>
                        </Empty>
                    )}

                    {/* POSTS */}
                    {posts.map((post, index) => (
                        <FadeIn key={post.id} index={index}>
                            <ProfilePostCard
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

Profile.layout = (page) => <Layout>{page}</Layout>;
