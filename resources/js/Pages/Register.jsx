import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { DitherShader } from "@/components/ui/dither-shader";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Register() {
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

                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                <Input
                                    id="name"
                                    className="text-lg py-6 px-4"
                                    placeholder="John Smith"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="name">Birthday</FieldLabel>
                                <Input
                                    id="name"
                                    className="text-lg py-6 px-4"
                                    placeholder="John Smith"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="name">Gender</FieldLabel>
                                <Input
                                    id="name"
                                    className="text-lg py-6 px-4"
                                    placeholder="John Smith"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="name">Email</FieldLabel>
                                <Input
                                    id="name"
                                    className="text-lg py-6 px-4"
                                    placeholder="John Smith"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
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
                    </div>
                </div>
            </div>

            <footer>All rights reserved</footer>
        </>
    );
}
