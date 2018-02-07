import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import ServiceWorker from '../utils/service-worker'

export default class MyDocument extends Document {
  render () {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Nextjs Boilerplate</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width'
            }
          />
          {/*
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            */}
          <meta content="IE=edge" httpEquiv="" />
          <meta content="yes" name="mobile-web-app-capable" />
          <base href="/" />
          <link rel="manifest" href="/static/manifest.json" />
          <link href="/static/favicon.png" rel="shortcut icon" type="image/png" />
          {/* PWA primary color */}
          <meta content="Nextjs Boilerplate" name="apple-mobile-web-app-title" />
          <meta content="#2F80ED" name="apple-mobile-web-app-status-bar-style" />
          <meta content="#2F80ED" name="msapplication-navbutton-color" />
          <meta content="#2F80ED" name="theme-color" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Nextjs Boilerplate" />
          <meta name="theme-color" content="#2F80ED" />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
          <ServiceWorker />
        </body>
      </html>
    )
  }
}
