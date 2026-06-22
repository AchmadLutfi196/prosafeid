import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import FloatingWhatsApp from '@/components/public/FloatingWhatsApp';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-surface-light font-sans text-on-surface antialiased">
            <Navbar />
            <main className="pt-16 lg:pt-[92px] pb-16 lg:pb-0">
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
