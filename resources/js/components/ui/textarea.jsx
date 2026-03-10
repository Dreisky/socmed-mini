import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
    const textareaRef = React.useRef(null);

    const adjustHeight = () => {
        const el = textareaRef.current;
        if (!el) return;

        el.style.height = "auto";

        const maxHeight = 200; // px
        const newHeight = el.scrollHeight;

        if (newHeight > maxHeight) {
            el.style.height = maxHeight + "px";
            el.style.overflowY = "auto";
        } else {
            el.style.height = newHeight + "px";
            el.style.overflowY = "hidden";
        }
    };

    React.useEffect(() => {
        adjustHeight();
    }, []);

    return (
        <textarea
            ref={textareaRef}
            onInput={adjustHeight}
            data-slot="textarea"
            className={cn(
                "min-h-10 w-full resize-none rounded-md bg-transparent px-3 py-2 text-base outline-none placeholder:text-muted-foreground md:text-sm",
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
