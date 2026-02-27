import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { route } from "ziggy-js";
import { useEffect } from "react";

export default function EditPostModal({ open, onOpenChange, post }) {
    const { data, setData, put, processing, reset } = useForm({
        description: "",
    });

    useEffect(() => {
        if (post && open) {
            setData("description", post.description);
        }
    }, [post, open]);

    const handleSubmit = () => {
        put(route("post.update", post), {
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
