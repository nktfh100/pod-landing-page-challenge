import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import logoImg from "../../public/logo.svg"
import backgroundImg from "../../public/image-host-desktop.webp"
import EmailInput from '@/components/input/EmailInput'

const brandsData: { name: string, image: string }[] = [
  {
    "name": "spotify",
    "image": require("../../public/spotify.svg")
  },
  {
    "name": "apple podcast",
    "image": require("../../public/apple-podcast.svg")
  },
  {
    "name": "google podcasts",
    "image": require("../../public/google-podcasts.svg")
  },
  {
    "name": "pocket casts",
    "image": require("../../public/pocket-casts.svg")
  }
]


export default function Home() {
  return (
    <>
      <Head>
        <title>Pod</title>
        <meta name="description" content="Pod landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}>

        <div className={styles['content-container']} >

          <div className={styles['logo-container']}>
            <Image src={logoImg} alt='pod logo' />
          </div>

          <h1 className={styles['header']}>
            <span>Publish your podcasts</span>
            <span>everywhere.</span>
          </h1>

          <p className={styles['description']}>
            Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
          </p>

          <div className={styles['bottom-section']}>
            <EmailInput />

            <ul className={styles['brands-container']}>
              {
                brandsData.map((ele, i) => {
                  return (
                    <li key={i}>
                      <Image src={ele.image} alt={ele.name} />
                    </li>
                  )
                })
              }
            </ul>
          </div>

        </div>

        <picture className={styles['background-container']}>
          <source width={491} height={767} srcSet="/image-host-mobile.webp" media="(max-width: 850px)" />
          <Image className={styles['background-img']} priority src={backgroundImg} alt="background" />
        </picture>

        <div className={styles['background-mobile']}></div>
      </main>
    </>
  )
}
