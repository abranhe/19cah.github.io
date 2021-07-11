module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://docs.google.com/document/d/1tcOYBwDP7dnmK4hn4uWWdSRfhVr6NQhPVQ93CA5r-EM/preview',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/abranhe',
        permanent: true,
      },
      {
        source: '/gitlab',
        destination: 'https://gitlab.com/abranhe',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/abranhe',
        permanent: true,
      },
      {
        source: '/stackoverflow',
        destination: 'https://stackoverflow.com/users/7602110',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://facebook.com/abranhe',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/abranhe',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://tiktok.com/@abranhe',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://pinterest.com/abranhe',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/abranhe',
        permanent: true,
      },
    ];
  },
};
