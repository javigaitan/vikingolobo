import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { HistorySection } from "@/components/history-section"
import { PracticesSection } from "@/components/practices-section"
import { MembersSection } from "@/components/members-section"
import { SpaceSection } from "@/components/space-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <HistorySection />
      <PracticesSection />
      <MembersSection />
      <SpaceSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
