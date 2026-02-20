import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { DitherShader } from "@/components/ui/dither-shader";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="hidden md:flex flex-1 border-e p-12 items-center justify-center">
                <div className="max-w-xl w-full">
                    <h1 className="mb-6 text-5xl italic font-extrabold tracking-tight">
                        Blinkr
                    </h1>

                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                        <DitherShader
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
                            gridSize={2}
                            ditherMode="bayer"
                            colorMode="grayscale"
                            invert={false}
                            animated={false}
                            animationSpeed={0.02}
                            primaryColor="#000000"
                            secondaryColor="#f5f5f5"
                            threshold={0.5}
                            className="h-64 w-full md:h-96"
                        />
                    </div>

                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                        &quot;Every thought deserves a place. Every moment
                        deserves a blink.&quot;
                    </blockquote>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-md">
                    <Field className="mb-8">
                        <FieldLabel className="text-2xl font-semibold">
                            Log in to <span className="italic">Blinkr</span>
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
                            <FieldLabel htmlFor="password">Password</FieldLabel>
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
                                Log in
                            </Button>

                            <Button
                                variant="ghost"
                                type="button"
                                className="w-full py-6 rounded-full text-md"
                            >
                                Forgot password?
                            </Button>

                            <Button
                                variant="outline"
                                type="button"
                                className="w-full py-6 rounded-full text-md"
                            >
                                <Link href={route("user.register")}>
                                    Create new account
                                </Link>
                            </Button>
                        </div>
                    </FieldGroup>
                </div>
            </div>
        </div>
    );
}
