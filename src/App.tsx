import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
