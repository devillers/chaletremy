import { Html, Head, Main, NextScript } from 'next/document';

const document = () => {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
