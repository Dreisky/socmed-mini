import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import Layout from "./Layout/Layout";

export default function Home() {
    return (
        <>
            <div className="py-12 flex h-screen items-center">
                <div className="flex-1 border-e h-full">
                    <Button>Hello</Button>
                </div>
                <div className="w-150 p-12">
                    <Field className="mb-6">
                        <FieldLabel className="text-lg">
                            Log in to <span className="italic">Blinkr</span>
                        </FieldLabel>
                    </Field>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="fieldgroup-name">
                                Name
                            </FieldLabel>
                            <Input
                                className="text-xl py-6  px-4"
                                id="fieldgroup-name"
                                placeholder="Jordan Lee"
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="fieldgroup-email">
                                Password
                            </FieldLabel>
                            <Input
                                className="py-6 px-4"
                                id="fieldgroup-email"
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Field>
                        <Field orientation="horizontal" className="mb-6">
                            <div className="w-full">
                                <Button
                                    type="submit"
                                    className="w-full py-6 rounded-full text-md"
                                >
                                    Log in
                                </Button>
                                <Button
                                    variant="ghost"
                                    type="submit"
                                    className="w-full mt-4 py-6 rounded-full text-md"
                                >
                                    Forgot password?
                                </Button>
                            </div>
                        </Field>
                        <Field orientation="horizontal">
                            <Button
                                variant="outline"
                                type="submit"
                                className="w-full py-6 rounded-full text-md"
                            >
                                Create new account
                            </Button>
                        </Field>
                    </FieldGroup>
                </div>
            </div>
        </>
    );
}
