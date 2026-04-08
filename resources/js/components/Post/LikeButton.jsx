import { IconThumbUp, IconThumbUpFilled } from "@tabler/icons-react";

import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

export default function LikeButton({ post }) {
    const { post: sendPost, processing } = useForm();

    const toglleLike = () => {
        sendPost(route("like.store", post), {
            preserveScroll: true,
        });

        console.log(route("like.store", post.id));
    };

    return (
        <>
            <Button
                variant="ghost"
                className="text-md"
                onClick={toglleLike}
                disabled={processing}
            >
                {post.is_liked ? (
                    <IconThumbUpFilled fill="blue" />
                ) : (
                    <IconThumbUp />
                )}
                Like
            </Button>
        </>
    );
}
