import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS } from '../constants/config';

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about booking, vehicles, pricing, and services at Vrunda Tours & Travels."
        path="/faq"
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before you book."
        image="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom max-w-3xl">
          <SectionHeader eyebrow="Help Center" title="Got Questions? We've Got Answers" />
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
