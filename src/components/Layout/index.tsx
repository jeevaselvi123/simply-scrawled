import Header from "@/components/Header";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
