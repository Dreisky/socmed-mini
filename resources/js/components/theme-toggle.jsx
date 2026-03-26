import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    // Sync initial state with <html> class
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const dark = html.classList.toggle("dark");

        localStorage.setItem("theme", dark ? "dark" : "light");
        setIsDark(dark);
    };

    return (
        <Button
            variant="outline"
            className="rounded-4xl"
            size="icon"
            onClick={toggleTheme}
        >
            {isDark ? <Sun /> : <Moon />}
        </Button>
    );
}
