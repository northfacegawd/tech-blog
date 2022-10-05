import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Roboto:wght@300;500;900&display=swap"
          rel="stylesheet"
        />
        <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors ease-out duration-300">
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            (function () {
              const theme = localStorage.getItem('theme');

              if(theme && ['dark','light'].includes(theme)) {
                document.querySelector('html').dataset.theme = theme;
                return;
              } 

              if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.querySelector('html').dataset.theme = 'dark';
              } else {
                document.querySelector('html').dataset.theme = 'light';
              }
            })();
          `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
