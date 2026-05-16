import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarCustom({ pic, size = "10", user }) {
    const src = pic ? `/storage/${pic}` : "https://github.com/shadcn.png";

    return (
        <Avatar className={`w-${size} h-${size}`}>
            <AvatarImage className="object-cover" src={src} />
            <AvatarFallback className="text-sm font-medium">
                {user?.username?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    );
}
