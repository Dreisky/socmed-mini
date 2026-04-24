import ProfileHead from "@/components/Profile/ProfileHead";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { IconCameraFilled } from "@tabler/icons-react";
import { useState, useRef } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { toast } from "sonner";

export default function CoverPhoto() {
    const { auth } = usePage().props;
    const coverPhotoRef = useRef(null);

    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing } = useForm({
        cover_photo: null,
    });

    const coverSrc = preview
        ? preview
        : auth.user.cover_photo
          ? `/storage/${auth.user.cover_photo}`
          : "/images/coverphoto.png";

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("profile.cover.update"), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Cover photo has been saved");
                setPreview(null);
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    console.log("Submitting:", data.cover_photo);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[350px] relative">
                    <img
                        className="w-full h-full object-cover"
                        src={coverSrc}
                        alt=""
                    />

                    <Button
                        type="button"
                        className="absolute bottom-4 right-4"
                        onClick={() => coverPhotoRef.current.click()}
                    >
                        <IconCameraFilled />{" "}
                        {preview ? "Select Cover Photo" : "Edit Cover Photo"}
                    </Button>

                    {preview && (
                        <div className="absolute top-4 right-4 flex gap-2">
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                disabled={processing}
                            >
                                Save Changes
                            </Button>

                            <Button
                                type="button"
                                variant="destructive"
                                onClick={() => {
                                    setPreview(null);
                                    setData("cover_photo", null);
                                }}
                            >
                                Cancel
                            </Button>
                        </div>
                    )}

                    <Input
                        type="file"
                        ref={coverPhotoRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                setPreview(URL.createObjectURL(file));
                                setData("cover_photo", e.target.files[0]);
                            }
                        }}
                    />
                </div>
            </form>

            <ProfileHead />
        </div>
    );
}
