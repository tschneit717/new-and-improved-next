import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'

export { getServerSideProps } from './../api/pages/homepage'

export default function HomePage({ title, mobileTitle, tagline, content, accent, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer} hero={{ text: title, subtext: tagline }}>
       <ContentBox headline={"Let's build together"} copy={content} count={1}></ContentBox>
      </Layout>
    </div>
  )
}
