import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPostCard() {
    return (
        <Card className="w-full max-w-[875px]">
            <CardHeader>
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-50 w-full" />
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
                <Skeleton className="h-8" />
                <Skeleton className="h-8" />
            </CardFooter>
        </Card>
    );
}
