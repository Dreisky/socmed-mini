import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Layout from "./Layout/Layout";

export default function Home() {
    return (
        <>
            <Button>Hello Shad</Button>
            <p>Test</p>
        </>
    );
}

Home.layout = (page) => <Layout header="Dashboard">{page}</Layout>;
