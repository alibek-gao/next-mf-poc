import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export function Home({ test }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            type of {typeof test} and value of {test || 'undefined'}
          </p>
          <div>
            <Link href={'/page'}>Click here to visit Another page</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const test = Date.now() % 1000
  return {
    props: {
      test,
    },
  };
}

export default Home
