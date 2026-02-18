import { Button } from "@/components/ui/button";

export default function Layout({ children, header }) {
    return (
        <>
            <header className="flex items-center justify-between py-4 px-8 border-b">
                <div>Logo Here</div>
                <div className="flex gap-2">
                    <Button variant="outline">Log In</Button>
                    <Button variant="outline">Sign Up</Button>
                </div>
            </header>

            <main className="py-6 px-8">{children}</main>
        </>
    );
}
