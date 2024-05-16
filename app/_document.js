import { Html, Head, Main, NextScript } from 'next/document';

const document = () => {
  return (
    <Html lang="fr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap"
          rel="stylesheet"
        />

       
       
        
      </Head>

      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
