import Layout from "../Layout/Layout";

import { useState, useEffect } from "react";

import AddPostModal from "../../components/PostModal/AddPostModal";
import EditPostModal from "@/components/PostModal/EditPostModal";
import DeletePostModal from "@/components/PostModal/DeletePostModal";
import ShowCommentModal from "@/components/CommentModal/ShowCommentModal";

import ProfilePostCard from "@/components/Post/ProfilePostCard";
import { usePage } from "@inertiajs/react";

export default function Profile({ posts }) {
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
            <div>
                <div className="space-y-3">
                    {/* POSTS */}
                    {posts.map((post) => (
                        <ProfilePostCard
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
