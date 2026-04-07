import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { route } from "ziggy-js";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function EditPostModal({ open, onOpenChange, post }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        description: "",
    });

    useEffect(() => {
        if (post && open) {
            setData("description", post.description);
        }
    }, [post, open]);

    const handleSubmit = () => {
        put(route("post.update", post), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                onOpenChange(false);
                reset();
            },
        });
    };

    return (
        <>
            <Modal
                open={open}
                onOpenChange={onOpenChange}
                title={"Update Post"}
            >
                <div className="space-y-4">
                    <Textarea
                        className="h-24"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="What's on your mind?"
                    />

                    {errors.description && (
                        <p className="text-red-500 text-xs italic font-light">
                            {errors.description}
                        </p>
                    )}

                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={processing}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
