import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container my-5">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
