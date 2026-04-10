import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { Link } from "@inertiajs/react";

export default function Pic() {
    const fileInputRef = useRef(null);

    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing } = useForm({
        profile_picture: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("setup.pic.post"), {
            forceFormData: true,
        });
    };

    console.log(data);

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-200">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Card className="w-100 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-sm">
                    <CardHeader className="flex justify-end text-sm text-muted-foreground cursor-pointer hover:text-black transition">
                        <Link href={route("home.index")}>Skip</Link>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center gap-4 pb-6">
                        <div className="relative">
                            <Avatar className="w-40 h-40 ring-4 ring-white shadow-lg">
                                <AvatarImage
                                    className="object-cover"
                                    src={
                                        preview
                                            ? preview
                                            : "https://github.com/shadcn.png"
                                    }
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="absolute inset-0 rounded-full bg-black/5 blur-xl -z-10"></div>
                        </div>

                        <div className="text-center space-y-1">
                            <h2 className="text-xl font-semibold">
                                Upload Profile Picture
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Choose a photo to personalize your account
                            </p>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-3">
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

                        <Button
                            className="w-full rounded-xl shadow-md hover:shadow-lg transition"
                            onClick={() => fileInputRef.current.click()}
                            type="button"
                        >
                            Select Picture
                        </Button>

                        {preview && (
                            <Button
                                variant="outline"
                                type="submit"
                                className="w-full text-muted-foreground hover:text-black"
                                disabled={processing}
                            >
                                Confirm
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
