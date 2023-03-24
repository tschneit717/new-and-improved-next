import Head from 'next/head';
import { Layout } from '../components/Layout';
import styles from '../styles/Home.module.css';

export { getServerSideProps } from './../api/pages/homepage'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

      </Layout>
    </div>
  )
}
