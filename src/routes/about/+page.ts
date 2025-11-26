export const load = async () => {
  const title = 'Our Chef Network | Hand-Selected Luxury Private Chefs';
  const description =
    'Meet Chefly\'s curated network of Michelin-trained private chefs. Discover how we match you with the perfect culinary artist for your Lake Como villa or private event.';
  const canonical = 'https://cheflycomo.com/about';
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
      '@type': 'Organization',
      name: 'Chefly',
      description,
      url: canonical,
      image: ogImage,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Booking',
        telephone: '+39 031 000 0000'
      },
      areaServed: {
        '@type': 'Place',
        name: 'Lake Como',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Como',
          addressRegion: 'CO',
          postalCode: '22100',
          addressCountry: 'IT'
        }
      },
      sameAs: [
        'https://instagram.com/cheflycomo',
        'https://linkedin.com/company/chefly'
      ]
    }
  };
};
