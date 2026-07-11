import { type ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';

// TODO Langkah 6: Import Footer setelah komponen dibuat
// import Footer from '@/components/layout/Footer';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="public-layout">

            <Navbar />

            <main className="public-layout__content">
                {/*children untuk wrap section lain*/}
                {children}
            </main>

            {/* Langkah 6: Footer akan diletakkan di sini */}
            {/* <Footer /> */}

        </div>
    );
}
