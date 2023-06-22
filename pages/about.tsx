import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Box } from '../components/Box'

export { getStaticProps } from './../api/pages/about'

export default function AboutPage({ title, mobileTitle, tagline, content, accent, image, footer }): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <Box>
          <ContentBox image={image} count={1} headline={'Who am I'} copy={content} />
        </Box>
      </Layout>
    </>
  )
}
