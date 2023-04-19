import Head from 'next/head'
import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'

export { getServerSideProps } from './../api/pages/homepage'

export default function HomePage ({ title, tagline, content, accent, footer }): JSX.Element {
  return (
<div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} tagline={tagline} accent={accent} footer={footer}>
        <Hero text={title} subtext={content}></Hero>
        <p>{content}</p>
      </Layout>
    </div>
  )
}
