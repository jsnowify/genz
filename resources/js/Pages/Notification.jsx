import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Notification() {
    return (
        <AuthenticatedLayout>
            <Head title="Notification" />
        </AuthenticatedLayout>
    );
}
