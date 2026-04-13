import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { IconMapPin, IconPencil } from "@tabler/icons-react";

export default function PersonalDetails() {
    return (
        <Card>
            <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Personal Details</h1>
                    <Button variant="ghost">
                        <IconPencil />
                    </Button>
                </div>

                <Link variant="ghost" className="text-start">
                    <div className="flex items-center gap-3">
                        <IconMapPin />
                        Lives in Idk
                    </div>
                </Link>
            </CardContent>
        </Card>
    );
}
