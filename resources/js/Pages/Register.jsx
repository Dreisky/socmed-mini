import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { useForm } from "@inertiajs/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Register() {
    const fileInputRef = useRef(null);

    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, reset } = useForm({
        username: "",
        email: "",
        gender: "",
        password: "",
        profile_picture: null,
    });

    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.store"), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    console.log(data);

    return (
        <>
            <div className="flex items-center justify-between border-b py-4 px-8">
                <h1 className="text-3xl italic font-extrabold tracking-tight">
                    Blinkr
                </h1>

                <Button variant="outline">
                    <Link href={route("login")}>Log in</Link>
                </Button>
            </div>

            <div className="min-h-screen md:flex-row">
                <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
                    <div className="w-full max-w-md">
                        <Field className="mb-8">
                            <FieldLabel className="text-2xl text-center font-semibold">
                                Sign up
                            </FieldLabel>
                        </Field>
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {preview && (
                                <div className="flex justify-center">
                                    <Avatar className="rounded-full h-40 w-40">
                                        <AvatarImage
                                            src={preview}
                                            className="object-cover"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                            )}
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="picture">
                                        Profile Picture
                                    </FieldLabel>
                                    <Input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                setPreview(
                                                    URL.createObjectURL(file),
                                                );
                                            }
                                            setData(
                                                "profile_picture",
                                                e.target.files[0],
                                            );
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        onClick={() =>
                                            fileInputRef.current.click()
                                        }
                                    >
                                        Select Photo
                                    </Button>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Username
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        className="text-lg py-6 px-4"
                                        placeholder="John Smith"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Gender
                                    </FieldLabel>
                                    <Select
                                        value={data.gender}
                                        onValueChange={(value) =>
                                            setData("gender", value)
                                        }
                                    >
                                        <SelectTrigger className="w-full p-6">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Gender
                                                </SelectLabel>
                                                <SelectItem value="male">
                                                    Male
                                                </SelectItem>
                                                <SelectItem value="female">
                                                    Female
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="text-lg py-6 px-4"
                                        placeholder="johnsmith@gmail.com"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="password">
                                        Password
                                    </FieldLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="py-6 px-4"
                                        placeholder="######"
                                    />
                                </Field>

                                <div className="space-y-4 mt-6">
                                    <Button
                                        type="submit"
                                        className="w-full py-6 rounded-full text-md"
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </FieldGroup>
                        </form>
                    </div>
                </div>
            </div>

            <footer>All rights reserved</footer>
        </>
    );
}
