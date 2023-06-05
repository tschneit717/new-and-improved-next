import Head from 'next/head'
import { Layout } from '../components/Layout'

export { getServerSideProps } from './../api/pages/homepage'

export default function HomePage({ title, mobileTitle, tagline, content, image, accent, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer} hero={{ text: title, subtext: tagline }}>
      </Layout>
    </div>
  )
}
