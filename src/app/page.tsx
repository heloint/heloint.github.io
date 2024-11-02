import { redirect } from "next/navigation";
import { defaultLangParam } from "@/lib/internationalization/langParam";

export default function RootPage() {
    redirect(`/${defaultLangParam}`);
}
