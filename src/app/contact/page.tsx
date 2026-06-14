import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = createMetadata({
  title: "تواصل معنا",
  description: "تواصل مع فريق ذكي تك — ابدأ مشروعك أو احجز استشارة مجانية.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}

