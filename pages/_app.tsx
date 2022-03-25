import { Page } from 'components/Page'
import { SITE_DESCRIPTION, SITE_NAME } from 'config'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import 'styles/global.css'
import 'tailwindcss/tailwind.css'

const App: FunctionComponent<any> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Page>
      <NextSeo title={SITE_NAME} description={SITE_DESCRIPTION} />
      <Component {...pageProps} />
    </Page>
  </>
)

export default App
