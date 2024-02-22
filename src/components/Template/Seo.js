import React from 'react';

import { Helmet } from 'react-helmet-async';

export const Seo = ({ title, description, keyword,author,image,URL,type,name}) => {
  return (
    <Helmet>
      
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content={image} />
        <meta
          property="og:url"
          content={URL}
        />
     
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
