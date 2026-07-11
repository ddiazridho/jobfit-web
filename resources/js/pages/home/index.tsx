import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/PublicLayout';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
    return (
        <>
            <Head title="JobFit — Are Your Skills Industry Ready?" />

            <PublicLayout>
                <HeroSection />
            </PublicLayout>
        </>
    );
}
