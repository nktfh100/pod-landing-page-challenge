import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Chivo } from '@next/font/google'

const chivo = Chivo({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
      html {
        font-family: ${chivo.style.fontFamily};
      }
    `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
