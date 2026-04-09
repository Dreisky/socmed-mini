import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

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
                className="text-md text-muted-foreground"
                onClick={toglleLike}
                disabled={processing}
            >
                {post.is_liked ? (
                    <IconHeartFilled
                        size={32}
                        className="p-0 m-0 h-full w-full"
                        fill="red"
                    />
                ) : (
                    <IconHeart size={32} />
                )}
                Like
            </Button>
        </>
    );
}
