import NextHead from 'next/head'

const Head = ({ title, description }) => (
  <NextHead>
    {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-152603515-3"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'UA-152603515-3');
    </script> */}

    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/icon32.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/icon32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/icon32.png"
    />
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, inititial-scale=1" />
    <link rel="stylesheet" href="https://use.typekit.net/iqb0dfb.css" />
  </NextHead>
)

export default Head
