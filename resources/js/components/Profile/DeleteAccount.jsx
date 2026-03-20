import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

import DeleteAccountModal from "./DeleteAccountModal";
import { useState } from "react";

export default function DeletAccount() {
    const [deleteAccountModalOpen, setDeleteAccountModalOpen] = useState(false);

    return (
        <>
            <Card>
                <CardHeader>
                    <h1 className="font-semibold text-lg">Delete Account</h1>
                    <p className="opacity-75 text-sm">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <Button
                            variant="destructive"
                            type="submit"
                            className="tracking-widest uppercase"
                            onClick={() => {
                                setDeleteAccountModalOpen(true);
                            }}
                        >
                            Delete Account
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <DeleteAccountModal
                open={deleteAccountModalOpen}
                onOpenChange={setDeleteAccountModalOpen}
            />
        </>
    );
}
