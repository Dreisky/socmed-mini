import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { route } from "ziggy-js";
import { Textarea } from "@/components/ui/textarea";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field";
import { useRef, useState } from "react";
import { Image } from "lucide-react";

export default function AddPostModal({ open, onOpenChange }) {
    const fileInputRef = useRef(null);

    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        description: "",
        post_photo: null,
    });

    console.log(data);

    const handleSubmit = () => {
        post(route("post.store"), {
            forceFormData: true,
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
            <Modal open={open} onOpenChange={onOpenChange} title={"New Blink"}>
                <div className="space-y-4 max-h-[350px] overflow-y-auto">
                    <Textarea
                        className="h-24"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="Blink a thought..."
                    />

                    {preview && (
                        <div className="flex justify-center">
                            <div className="relative">
                                <img
                                    src={preview}
                                    className="rounded-md"
                                    alt=""
                                />

                                <div className="absolute top-2 right-2">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() => {
                                            setPreview(null);
                                            setData("post_photo", null);
                                            fileInputRef.current.value = null;
                                        }}
                                    >
                                        X
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    <Field>
                        <Input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setPreview(URL.createObjectURL(file));
                                }
                                setData("post_photo", e.target.files[0]);
                            }}
                        />
                        <div className="flex justify-end">
                            <Button
                                variant="outline"
                                type="button"
                                onClick={() => fileInputRef.current.click()}
                            >
                                <Image />
                            </Button>
                        </div>
                    </Field>

                    <div className="flex justify-end gap-2">
                        <Button
                            type="submit"
                            disabled={!data.description}
                            onClick={handleSubmit}
                            className="w-full"
                        >
                            Blink
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
