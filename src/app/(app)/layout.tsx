import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { PreloadResources } from '@/preload-resourses'
import '@/globals.css'

export const metadata = {
  title: 'Test',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children?: React.ReactElement | null }) {
  return (
    <html lang="en">
      <PreloadResources />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" />
        <div
          hidden
          id="snipcart"
          data-api-key="NzRkZmZhMzUtZWI2Ny00YTJiLTk0ZDEtYjE5MDZkNWZkZmVkNjM4Njk5MjAwMTUzNTEyMjI0"
        ></div>
      </body>
    </html>
  )
}
