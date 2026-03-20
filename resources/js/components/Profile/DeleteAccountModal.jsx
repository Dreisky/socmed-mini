import { useForm } from "@inertiajs/react";
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

export default function DeleteAccountModal({ open, onOpenChange }) {
    const { processing, delete: destroy } = useForm();

    const handleDelete = () => {
        destroy(route("account.delete"), {
            preserveScroll: true,
            onSuccess: () => onOpenChange(false),
        });
    };

    return (
        <>
            <AlertDialog open={open} onOpenChange={onOpenChange}>
                <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                        <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                            <Trash2Icon />
                        </AlertDialogMedia>
                        <AlertDialogTitle>Delete Account?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete your acount?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel variant="outline">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            type="submit"
                            variant="destructive"
                            disabled={processing}
                            onClick={handleDelete}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
