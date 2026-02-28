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
                onClick={toglleLike}
                disabled={processing}
                className={post.is_liked && "text-red-500"}
            >
                {post.is_liked ? "❤️" : "🤍"}
                Like
            </Button>
        </>
    );
}
