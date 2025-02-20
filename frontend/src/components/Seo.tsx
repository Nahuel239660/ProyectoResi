import { Helmet } from 'react-helmet-async';
import React from 'react';
export default function Seo({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
