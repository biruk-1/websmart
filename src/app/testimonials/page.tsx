import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Testimonials — Web Smart",
  description:
    "What founders and product teams say about working with Web Smart. Real stories from real projects.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TestimonialsPageContent />
      </main>
      <Footer />
    </>
  );
}
