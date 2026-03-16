import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function ProfileInfo({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        username: user.username,
        email: user.email,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("profile.update"), {
            preserveScroll: true,
        });
    };

    console.log(data);
    return (
        <Card>
            <CardHeader>
                <h1 className="font-semibold text-lg">Profile Information</h1>
                <p className="opacity-75 text-sm">
                    Update your account's profile information and email address.
                </p>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <Field>
                            <FieldLabel>Username</FieldLabel>
                            <Input
                                className="text-lg py-6 px-4 max-w-xl"
                                value={data.username}
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input
                                className="text-lg py-6 px-4 max-w-xl"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
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
