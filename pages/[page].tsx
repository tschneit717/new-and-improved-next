import Head from 'next/head'
import { Layout } from '../components/Layout'

export { getServerSideProps } from '../api/pages/projects'

export default function PageWithProps({ title, mobileTitle, tagline, content, image, accent, footer }): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <p>{content}</p>
      </Layout>
    </>
  )
}
