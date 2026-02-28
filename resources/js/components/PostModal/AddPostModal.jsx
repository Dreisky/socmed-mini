import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { route } from "ziggy-js";

export default function AddPostModal({ open, onOpenChange }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        description: "",
    });

    const handleSubmit = () => {
        post(route("post.store"), {
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
                title={"Create Post"}
            >
                <div className="space-y-4">
                    <Input
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
                            onClick={() => {
                                reset();
                                onOpenChange(false);
                            }}
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
