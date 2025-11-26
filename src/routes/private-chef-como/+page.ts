export const load = async () => {
  const title = 'Private Chef in Como | Luxury Villa Dining Experience';
  const description =
    'Discover Chefly Como: hand-selected private chefs for Lake Como villas. Tailored menus, zero planning, premium dining at home.';
  const canonical = 'https://cheflycomo.com/private-chef-como';
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
      name: 'Chefly Como',
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
      areaServed: 'Lake Como',
      priceRange: '$$$',
      serviceType: 'Private Chef Service'
    }
  };
};
