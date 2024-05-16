import { Html, Head, Main, NextScript } from 'next/document';

const document = () => {
  return (
    <Html lang="fr">
      <Head>{/* balise meta */}</Head>

      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
