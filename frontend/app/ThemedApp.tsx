import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface ThemedAppProps {
  children: React.ReactNode;
}

export default function ThemedApp({ children }: ThemedAppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
