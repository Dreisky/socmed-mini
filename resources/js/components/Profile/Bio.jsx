import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { IconHandLoveYou, IconPencil } from "@tabler/icons-react";

export default function Bio() {
    return (
        <Card>
            <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Bio</h1>
                    <Button variant="ghost">
                        <IconPencil />
                    </Button>
                </div>

                <p className="text-center">Lorem Ipsum Dolor</p>
            </CardContent>
        </Card>
    );
}
