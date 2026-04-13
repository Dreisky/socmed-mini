import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPostAddCard() {
    return (
        <Card className="w-full max-w-[875px]">
            <CardContent className="flex gap-2">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-full" />
            </CardContent>
        </Card>

        // <Card>
        //         <CardContent className="flex items-center gap-2">
        //             <Avatar className="h-10 w-10">
        //                 <AvatarImage
        //                     className="object-cover"
        //                     src={
        //                         auth.user.profile_picture
        //                             ? `/storage/${auth.user.profile_picture}`
        //                             : "https://github.com/shadcn.png"
        //                     }
        //                     alt="@shadcn"
        //                 />
        //                 <AvatarFallback>CN</AvatarFallback>
        //             </Avatar>
        //             <Button
        //                 onClick={onAdd}
        //                 variant="outline"
        //                 className="flex-1 rounded-full text-start bg-white"
        //                 size="lg"
        //             >
        //                 Blink a thought...
        //             </Button>
        //         </CardContent>
        //     </Card>
    );
}
