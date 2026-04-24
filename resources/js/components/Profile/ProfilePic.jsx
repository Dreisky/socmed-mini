import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { toast } from "sonner";
import { IconRefresh } from "@tabler/icons-react";

export default function ProifilePic({ user }) {
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const profileSrc = preview
        ? preview
        : user.profile_picture
          ? `/storage/${user.profile_picture}`
          : "https://github.com/shadcn.png";

    const { data, setData, put, processing, errors } = useForm({
        profile_picture: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("pic.update"), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Profile Picture updated!");
                setPreview(null);
                setData("profile_picture", "");
            },
            onError: () => {
                toast.error("Error");
            },
        });
    };

    console.log(data);
    console.log(preview);
    return (
        <Card className="h-full">
            <form className="flex flex-col h-full" onSubmit={handleSubmit}>
                <CardHeader>
                    <h1 className="font-semibold text-lg">Profile Picture</h1>
                </CardHeader>
                <CardContent className="flex flex-1 items-center justify-center">
                    <div className="relative w-fit">
                        <Avatar className="w-45 h-45 ring-4 ring-white shadow-lg">
                            <AvatarImage
                                className="object-cover"
                                src={profileSrc}
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Button
                            onClick={() => fileInputRef.current.click()}
                            className="absolute -bottom-1 right-0 -translate-x-1/2 z-10 rounded-full h-12 w-12 p-0"
                            type="button"
                        >
                            <IconRefresh className="h-4 w-4" />
                        </Button>
                        <Input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setPreview(URL.createObjectURL(file));
                                    setData(
                                        "profile_picture",
                                        e.target.files[0],
                                    );
                                }
                            }}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        variant="outline"
                        className="tracking-widest w-full"
                        disabled={!preview || processing}
                    >
                        Confirm
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
