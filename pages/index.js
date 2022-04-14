
import Script from 'next/script'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Script
        src="https://dev-gocall.l5.com.br/integration/webphone/v2.0.1/webphone.l5.js"
        strategy="beforeInteractive"
      />
      <div className='flex items-center justify-center w-full h-full'>
        <Layout />
      </div>
    </>
  )
}
