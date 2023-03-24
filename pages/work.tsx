import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'

export { getServerSideProps } from './../api/pages/work'

export default function PortfolioPage ({ title, tagline, content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} tagline={tagline}>
        <p>{content}</p>
      </Layout>
    </div>
  )
}
