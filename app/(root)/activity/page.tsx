import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser, getActivity } from "@/lib/actions/user.actions";

export default async function Page() {
    const user = await currentUser();
    if (!user) return null;
  
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
  
    const activity = await getActivity(userInfo._id);

    return (
        <section>
            user activity
        </section>
    )
}