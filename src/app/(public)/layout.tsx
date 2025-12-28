import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />

            {/* Floating CTA Mobile */}
            <div className="fixed bottom-6 right-6 z-40 md:hidden">
                <button className="w-16 h-16 rounded-full bg-brand-red text-white shadow-2xl flex items-center justify-center">
                    <MessageCircle size={32} />
                </button>
            </div>
        </>
    );
}
