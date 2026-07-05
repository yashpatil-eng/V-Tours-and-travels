import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import GalleryGrid from '../components/GalleryGrid';
import { GALLERY } from '../constants/config';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse photos of our fleet, tours, and happy customers from Vrunda Tours & Travels."
        path="/gallery"
      />
      <PageHero
        title="Gallery"
        subtitle="A glimpse into the journeys we've been part of."
        image="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom">
          <SectionHeader eyebrow="Moments" title="Photos From the Road" />
          <GalleryGrid images={GALLERY} />
        </div>
      </section>
    </>
  );
}
