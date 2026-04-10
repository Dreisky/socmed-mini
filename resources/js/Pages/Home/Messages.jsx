import Layout from "../Layout/Layout";
import { IconLoader } from "@tabler/icons-react";
import { RefreshCcwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

export default function Messages() {
    return (
        <>
            <Empty className="h-full bg-muted/30">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <IconLoader className="animate-spin" />
                    </EmptyMedia>
                    <EmptyTitle>Messages Unavailable</EmptyTitle>
                    <EmptyDescription className="max-w-2xs text-pretty">
                        This feature is not available yet. We're working on it —
                        stay tuned!
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        </>
    );
}

Messages.layout = (page) => <Layout>{page}</Layout>;
