import { Helmet } from 'react-helmet-async';

/**
 * Reusable per-page SEO component. Pass a title/description unique to
 * each page for optimal search engine indexing.
 */
export default function SEO({ title, description, path = '/' }) {
  const fullTitle = `${title} | Vrunda Tours & Travels`;
  const url = `https://www.vrundatours.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
