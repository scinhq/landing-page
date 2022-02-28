import Head from 'next/head';

export default function SEO({ description, title, siteTitle }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title> {`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Decentralized Publishing, DePub, Scientist Independence, SCIN, SCIN.io, SCIN.tech"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="img/favicon.svg" />
    </Head>
  );
}
