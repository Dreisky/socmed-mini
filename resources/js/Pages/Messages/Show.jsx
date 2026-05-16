import Layout from "../Layout/Layout";
// resources/js/Pages/Messages/Show.jsx
import { Link, useForm, usePage } from "@inertiajs/react";
import { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

import AvatarCustom from "@/components/AvatarCustom";

export default function ShowMessage({
    receiver,
    messages = [],
    conversations = [],
}) {
    const { auth } = usePage().props;
    const { data, setData, post, processing, reset } = useForm({ body: "" });

    const sendMessage = (e) => {
        e.preventDefault();
        post(route("messages.store", { username: receiver.username }), {
            preserveScroll: true,
            onSuccess: () => reset("body"),
        });
    };

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

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

            {/* Chat area */}
            <div className="flex-1 flex flex-col rounded-lg bg-card">
                {/* Header */}
                <div className="flex items-center gap-2 p-4 border-b font-semibold">
                    <AvatarCustom
                        pic={receiver.profile_picture}
                        user={receiver}
                    />
                    {receiver.username}
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {messages.map((message, index) => {
                        const isOwn = message.sender_id === auth.user.id;
                        const nextMessage = messages[index + 1];
                        const showAvatar =
                            !isOwn &&
                            (!nextMessage ||
                                nextMessage.sender_id !== message.sender_id);

                        return (
                            <div
                                key={message.id}
                                className={`flex items-end gap-2 ${isOwn ? "justify-end" : "justify-start"}`}
                            >
                                {!isOwn && (
                                    <div className="w-8 h-8 flex-shrink-0">
                                        {showAvatar && (
                                            <AvatarCustom
                                                user={receiver}
                                                pic={receiver.profile_picture}
                                                size="8"
                                            />
                                        )}
                                    </div>
                                )}

                                <div
                                    className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                                        isOwn
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-foreground"
                                    }`}
                                >
                                    {message.body}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Input */}
                <form onSubmit={sendMessage} className="p-4 flex gap-2">
                    <Input
                        ref={inputRef}
                        type="text"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        placeholder="Type a message..."
                        className="h-10 rounded-full"
                    />
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

ShowMessage.layout = (page) => <Layout padding="p-4">{page}</Layout>;
