import NextHead from 'next/head'

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, inititial-scale=1" />
    <link rel="stylesheet" href="https://use.typekit.net/iqb0dfb.css" />

    {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}
  </NextHead>
)

export default Head
