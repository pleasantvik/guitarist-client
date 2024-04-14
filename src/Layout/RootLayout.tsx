import Footer from "@/Layout/components/Footer";
import { ReactNode } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <div>
      <section className="grid grid-cols-[260px_1fr] h-screen">
        <div
          style={{
            gridColumn: "1/ span 2",
          }}
        >
          <Header />
        </div>
        <aside className="h-screen bg-primary-light">
          <Sidebar />
        </aside>
        <main>{children}</main>
        <div
          style={{
            gridColumn: "1/ span 2",
          }}
        >
          <Footer />
        </div>
      </section>
    </div>
  );
};

interface IRootLayout {
  children: ReactNode;
}
export default RootLayout;
