import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

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
            <Button variant="ghost" onClick={toglleLike} disabled={processing}>
                {post.is_liked ? (
                    <ThumbsUp fill="blue" stroke="none" />
                ) : (
                    <ThumbsUp />
                )}
                Like
            </Button>
        </>
    );
}
