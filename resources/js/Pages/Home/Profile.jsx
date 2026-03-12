import Layout from "../Layout/Layout";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field";

export default function Profile() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <Card>
                        <CardHeader>
                            <h1 className="font-semibold text-lg">
                                Profile Information
                            </h1>
                            <p className="opacity-75 text-sm">
                                Update your account's profile information and
                                email address.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <Field>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input className="text-lg py-6 px-4 max-w-xl" />
                                </Field>

                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input className="text-lg py-6 px-4 max-w-xl" />
                                </Field>
                                <Button
                                    type="submit"
                                    className="tracking-widest uppercase"
                                >
                                    Save
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <h1 className="font-semibold text-lg">
                                Update Password
                            </h1>
                            <p className="opacity-75 text-sm">
                                Ensure your account is using a long, random
                                password to stay secure.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <Field>
                                    <FieldLabel>Current Password</FieldLabel>
                                    <Input
                                        type="password"
                                        className="text-lg py-6 px-4 max-w-xl"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>New Password</FieldLabel>
                                    <Input
                                        type="password"
                                        className="text-lg py-6 px-4 max-w-xl"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>Confirm Password</FieldLabel>
                                    <Input
                                        type="password"
                                        className="text-lg py-6 px-4 max-w-xl"
                                    />
                                </Field>

                                <Button
                                    type="submit"
                                    className="tracking-widest uppercase"
                                >
                                    Save
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <h1 className="font-semibold text-lg">
                                Profile Information
                            </h1>
                            <p className="opacity-75 text-sm">
                                Once your account is deleted, all of its
                                resources and data will be permanently deleted.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <Button
                                    variant="destructive"
                                    type="submit"
                                    className="tracking-widest uppercase"
                                >
                                    Delete Account
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

Profile.layout = (page) => <Layout>{page}</Layout>;
