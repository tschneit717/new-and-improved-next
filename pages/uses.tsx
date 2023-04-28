import Head from 'next/head'
import { Layout } from '../components/Layout'

export { getServerSideProps } from './../api/pages/uses'

export default function UsesPage({ title, mobileTitle, tagline, content, accent, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <p>{content}</p>
      </Layout>
    </div>
  )
}
