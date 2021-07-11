export const title =
  'Abraham Hernandez – Developer, Photographer on the weekends.';

export const description =
  'Developer, Open Sourcerer, Computer Scientist and Photographer.';

export default {
  seo: {
    title,
    description,
    canonical: 'https://abranhe.com',
    openGraph: {
      type: 'profile',
      profile: {
        firstName: 'Abraham',
        lastName: 'Hernandez',
        username: 'abranhe',
        gender: 'Male',
      },
      images: [
        {
          url: 'https://cdn.abranhe.com/abraham/@abranhe.png',
          alt: title,
          width: 1280,
          height: 720,
        },
      ],
      sameAs: [
        'http://facebook.com/abranhe',
        'http://twitter.com/abranhe',
        'http://instagram.com/abranhe',
        'http://linkedin.com/in/abranhe',
      ],
    },
  },
};
