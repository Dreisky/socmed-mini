import Layout from "../Layout/Layout";
// resources/js/Pages/Messages/Index.jsx
import { Link } from "@inertiajs/react";
import AvatarCustom from "@/components/AvatarCustom";

export default function Messages({ conversations }) {
    return (
        <div className="flex gap-3" style={{ height: "calc(100vh - 5.5rem)" }}>
            {/* Sidebar */}
            <div className="w-1/3 bg-card rounded-lg overflow-y-auto">
                <h2 className="p-4 font-bold text-lg">Messages</h2>
                {conversations.map((convo) => (
                    <Link
                        key={convo.user.id}
                        href={route("messages.show", {
                            username: convo.user.username,
                        })}
                        className="flex items-center gap-3 p-4 hover:bg-accent"
                    >
                        <AvatarCustom
                            pic={convo.user.profile_picture}
                            user={convo.user}
                        />
                        <div>
                            <p className="text-sm font-semibold">
                                {convo.user.username}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                {convo.last_message}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Empty state when no conversation is selected */}
            <div className="flex-1 rounded-lg bg-card flex items-center justify-center text-gray-400">
                Select a conversation
            </div>
        </div>
    );
}
Messages.layout = (page) => <Layout padding="p-4">{page}</Layout>;
