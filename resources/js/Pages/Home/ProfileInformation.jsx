import Layout from "../Layout/Layout";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import UpdatePass from "@/components/Profile/UpdatePass";
import DeleteAccount from "@/components/Profile/DeleteAccount";

export default function ProfileInformation({ user }) {
    return (
        <>
            <div className="space-y-6">
                <ProfileInfo user={user} />

                <UpdatePass user={user} />

                <DeleteAccount user={user} />
            </div>
        </>
    );
}

ProfileInformation.layout = (page) => <Layout>{page}</Layout>;
