import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { route } from "ziggy-js";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
} from "@/components/ui/select";

export default function AddPostModal({ open, onOpenChange }) {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
    });

    return (
        <>
            <Modal open={open} onOpenChange={onOpenChange} title={"Add Client"}>
                <div className="space-y-4">
                    <Input
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Name"
                    />

                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="button" disabled={processing}>
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
