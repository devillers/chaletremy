import { Html, Head, Main, NextScript } from 'next/document';

const document = () => {
  return (
    <Html lang="fr">
      <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />

      </Head>

      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
