import {
  Header,
  Hero,
  HowItWorks,
  Founder,
  Features,
  Gallery,
  Faq,
  Testimonials,
  Support,
  Download,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Gallery />
        <Testimonials />
        <Faq />
        <Founder />
        <Support />
        <Download />
      </main>
      <Footer />
    </>
  );
}
