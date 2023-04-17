import Head from 'next/head'
import { Layout } from '../components/Layout'

export { getServerSideProps } from '../api/pages/projects'

export default function PageWithProps ({ title, tagline, content, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} tagline={tagline} footer={footer}>
        <p>{content}</p>
      </Layout>
    </div>
  )
}
