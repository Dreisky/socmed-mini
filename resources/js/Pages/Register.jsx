import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    const { data, setData, post, processing, reset } = useForm({
        username: "",
        email: "",
        gender: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.store"), {
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
                    <Link href={route("user.index")}>Log in</Link>
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
                        <form onSubmit={handleSubmit}>
                            <FieldGroup>
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
                                    <FieldLabel htmlFor="name">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="name"
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
                                        placeholder="••••••••"
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
