import Script from 'next/script';

const PhoneSnippet = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11405523497/9bVtCIyjnJwZEKn0yb4q" strategy="beforeInteractive" />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11405523497/9bVtCIyjnJwZEKn0yb4q', {
            'phone_conversion_number': '083 300 0705'
          });
        `}
      </Script>
    </>
  );
};

export default PhoneSnippet;
