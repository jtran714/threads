import { sidebarLinks } from "@/constants";

export default function LeftSidebar() {
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => (
                    <div>
                        Link
                    </div>
                ))}
            </div>
        </section>
    )
}