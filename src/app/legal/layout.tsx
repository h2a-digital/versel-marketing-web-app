import { ReactNode } from 'react';
import { Header, Footer } from '@/components';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#05050A] pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-invert prose-zinc max-w-none rounded-3xl border border-white/10 bg-[#09090F]/95 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur md:p-12">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
