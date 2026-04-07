import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { route } from "ziggy-js";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2Icon } from "lucide-react";

export default function DeletePostModal({ open, onOpenChange, post }) {
    const { delete: destroy, processing, reset } = useForm();

    const handleSubmit = () => {
        destroy(route("post.delete", post), {
            onSuccess: () => {
                onOpenChange(false);
                toast.success("Post has been deleted");
                reset();
            },
        });
    };

    return (
        <>
            <AlertDialog
                open={open}
                onOpenChange={onOpenChange}
                title={"Create Post"}
            >
                <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                        <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                            <Trash2Icon />
                        </AlertDialogMedia>
                        <AlertDialogTitle>Delete Post?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete this post.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel variant="outline">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            variant="destructive"
                            onClick={handleSubmit}
                            disabled={processing}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            {/* <Modal
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
            </Modal> */}
        </>
    );
}
