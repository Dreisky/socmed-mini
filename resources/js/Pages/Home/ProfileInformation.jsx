import Layout from "../Layout/Layout";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import UpdatePass from "@/components/Profile/UpdatePass";
import DeleteAccount from "@/components/Profile/DeleteAccount";
import ProfilePic from "@/components/Profile/ProfilePic";

export default function ProfileInformation({ user }) {
    return (
        <>
            <div className="space-y-6">
                <div className="grid grid-cols-[300px_1fr] gap-4 items-stretch">
                    <ProfilePic user={user} />

                    <ProfileInfo user={user} />
                </div>

                <UpdatePass user={user} />

                <DeleteAccount user={user} />
            </div>
        </>
    );
}

ProfileInformation.layout = (page) => <Layout>{page}</Layout>;
