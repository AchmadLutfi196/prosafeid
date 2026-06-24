import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import FloatingWhatsApp from '@/components/public/FloatingWhatsApp';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-surface-light font-sans text-on-surface antialiased">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
