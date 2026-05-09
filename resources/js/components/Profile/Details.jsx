import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { toast } from "sonner";
import { format } from "date-fns";

import { DatePicker } from "@/components/DatePicker";

export default function Details({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        bio: user.bio || "",
        birthdate: user.birthdate || "",
        occupation: user.occupation || "",
        address: user.address || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("about.update"), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Information updated!");
            },
            onError: () => {
                toast.error("Error");
            },
        });
    };

    console.log(data);
    return (
        <Card>
            <CardHeader>
                <h1 className="font-semibold text-lg">About</h1>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <Field>
                            <FieldLabel>Bio</FieldLabel>
                            <Textarea
                                className="border max-w-xl"
                                placeholder="Introduce yourself"
                                value={data.bio}
                                onChange={(e) => setData("bio", e.target.value)}
                            />
                        </Field>
                        {errors.bio && (
                            <p className="text-xs italic text-red-400">
                                {errors.bio}
                            </p>
                        )}

                        <Field>
                            <FieldLabel>Birthdate</FieldLabel>
                            <DatePicker
                                selected={
                                    data.birthdate
                                        ? new Date(data.birthdate)
                                        : undefined
                                }
                                onSelect={(date) =>
                                    setData(
                                        "birthdate",
                                        format(date, "yyyy-MM-dd"),
                                    )
                                }
                                maxw={"max-w-xl"}
                            />
                        </Field>
                        {errors.birthdate && (
                            <p className="text-xs italic text-red-400">
                                {errors.birthdate}
                            </p>
                        )}

                        <Field>
                            <FieldLabel>Occupation</FieldLabel>
                            <Input
                                className="text-lg py-6 px-4 max-w-xl capitalize"
                                value={data.occupation}
                                onChange={(e) =>
                                    setData("occupation", e.target.value)
                                }
                                placeholder="Enter occupation"
                            />
                        </Field>
                        {errors.occupation && (
                            <p className="text-xs italic text-red-400">
                                {errors.occupation}
                            </p>
                        )}

                        <Field>
                            <FieldLabel>Address</FieldLabel>
                            <Input
                                className="text-lg py-6 px-4 max-w-xl capitalize"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                placeholder="Enter address"
                            />
                        </Field>
                        {errors.address && (
                            <p className="text-xs italic text-red-400">
                                {errors.address}
                            </p>
                        )}

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
