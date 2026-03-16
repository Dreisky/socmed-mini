import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { useForm } from "@inertiajs/react";

export default function UpdatePass({ user }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("pass.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    console.log(data);

    return (
        <Card>
            <CardHeader>
                <h1 className="font-semibold text-lg">Update Password</h1>
                <p className="opacity-75 text-sm">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <Field>
                            <FieldLabel>Current Password</FieldLabel>
                            <Input
                                type="password"
                                className="text-lg py-6 px-4 max-w-xl"
                                value={data.current_password}
                                onChange={(e) =>
                                    setData("current_password", e.target.value)
                                }
                            />
                        </Field>

                        <Field>
                            <FieldLabel>New Password</FieldLabel>
                            <Input
                                type="password"
                                className="text-lg py-6 px-4 max-w-xl"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Confirm Password</FieldLabel>
                            <Input
                                type="password"
                                className="text-lg py-6 px-4 max-w-xl"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />
                        </Field>

                        <Button
                            type="submit"
                            className="tracking-widest uppercase"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
