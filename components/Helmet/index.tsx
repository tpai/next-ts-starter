import { memo } from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = () => {
  return (
    <Helmet
      title="Axie 贊助計畫"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
        },
        { property: 'og:title', content: 'Axie 贊助計畫' },
        { property: 'og:url', content: '' },
        { property: 'og:image', content: '' },
        { property: 'og:type', content: '' },
        { property: 'og:site_name', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:locale', content: '' },
      ]}
      link={[{ rel: 'canonical', href: '' }]}
    />
  );
};

export default memo(HelmetComponent);
