import Layout from "../Layout/Layout";

import { useState, useEffect } from "react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import { usePage } from "@inertiajs/react";
import PostCard from "@/components/Post/PostCard";
import PostAddCard from "@/components/Post/PostAddCard";

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
                    <PostAddCard
                        auth={auth}
                        onAdd={() => {
                            setAddPostModalOpen(true);
                        }}
                    />

                    {/* POSTS */}
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
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
