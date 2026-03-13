import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";

export default function ProfileInfo({ user }) {
    return (
        <Card>
            <CardHeader>
                <h1 className="font-semibold text-lg">Profile Information</h1>
                <p className="opacity-75 text-sm">
                    Update your account's profile information and email address.
                </p>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <Field>
                        <FieldLabel>Username</FieldLabel>
                        <Input
                            className="text-lg py-6 px-4 max-w-xl"
                            value={user.username}
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <Input
                            className="text-lg py-6 px-4 max-w-xl"
                            value={user.email}
                        />
                    </Field>
                    <Button type="submit" className="tracking-widest uppercase">
                        Save
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
