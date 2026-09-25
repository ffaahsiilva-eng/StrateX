/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Plans } from './components/Plans';
import { Calculator } from './components/Calculator';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans transition-colors duration-200 selection:bg-cyan-500/20 selection:text-cyan-900 dark:bg-[#080C14] dark:text-slate-100 overflow-x-hidden">
        {/* Strict Top Bar Contract */}
        <Navbar />

        <main className="flex-1 w-full">
          {/* Hero Section */}
          <Hero />

          {/* Services & Capabilities Bento Grid */}
          <Services />

          {/* The 3 Core Plans: Simples (R$500), Mediano (R$1.000), Empresarial (R$1.500 + mensalidade) */}
          <Plans />

          {/* Interactive Custom Budget Calculator */}
          <Calculator />

          {/* Real Projects & Portfolio */}
          <Portfolio />

          {/* Client Reviews with 5-star comments */}
          <Testimonials />

          {/* Frequently Asked Questions */}
          <FAQ />

          {/* Direct Contact with WhatsApp */}
          <ContactSection />
        </main>

        {/* Clean Footer */}
        <Footer />

        {/* Discreet high-converting Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
