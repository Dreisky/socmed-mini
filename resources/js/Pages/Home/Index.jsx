import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import Layout from "../Layout/Layout";

export default function Index() {
    const { delete: destroy, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("user.logout"));
    };

    return (
        <>
            <p>Hi youre now logged in</p>

            <form onSubmit={handleSubmit}>
                <Button type="submit" disabled={processing}>
                    Log out
                </Button>
            </form>
        </>
    );
}

Index.layout = (page) => <Layout>{page}</Layout>;
