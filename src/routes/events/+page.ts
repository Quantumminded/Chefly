export const load = async () => {
  const title = 'Private Chef for Events | Corporate, Weddings & Celebrations';
  const description =
    'Elevate your private events with hand-selected chefs. Corporate dinners, romantic celebrations, birthdays, and exclusive at-home dining experiences on Lake Como.';
  const canonical = 'https://cheflycomo.com/events';
  const ogImage = 'https://chefly10.vercel.app/media/hero-img.webp';

  return {
    title,
    description,
    canonical,
    og: {
      title,
      description,
      type: 'website',
      url: canonical,
      image: ogImage,
      imageWidth: 1920,
      imageHeight: 1080
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: ogImage
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Chefly Events',
      description,
      url: canonical,
      image: ogImage,
      telephone: '+39 031 000 0000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Regina 28',
        addressLocality: 'Como',
        addressRegion: 'CO',
        postalCode: '22100',
        addressCountry: 'IT'
      },
      areaServed: 'Lake Como & Surrounding Regions',
      priceRange: '$$$',
      serviceType: 'Private Chef Service for Events'
    }
  };
};
