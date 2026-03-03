import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function AddCommentModal({ post }) {
    const {
        data,
        setData,
        post: submit,
        processing,
        errors,
        reset,
    } = useForm({
        comment: "",
        post_id: post.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        submit(route("comment.store"), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();

                router.reload({
                    only: ["posts"], // VERY IMPORTANT
                });
            },
        });
    };

    console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="border-t p-2 flex gap-2 items-center">
                    <Input
                        value={data.comment}
                        onChange={(e) => setData("comment", e.target.value)}
                        placeholder="Write a comment..."
                        className="flex-1"
                    />
                    <Button>Send</Button>
                </div>
            </form>
        </>
    );
}
