import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { route } from "ziggy-js";

export default function AddPostModal({ open, onOpenChange }) {
    const { data, setData, post, processing, reset } = useForm({
        description: "",
    });

    const handleSubmit = () => {
        post(route("post.store"), {
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
                        value={data.name}
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="What's on your mind?"
                    />

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
