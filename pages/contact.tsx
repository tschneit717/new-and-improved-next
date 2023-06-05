import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Box } from '../components/Box'

export { getServerSideProps } from './../api/pages/contact'

export default function AboutPage({ title, mobileTitle, tagline, content, accent, image, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <Box>
          <ContentBox count={1} headline={'Who am I'} copy={content}>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
              <textarea id="message" name="message" rows={4}/>
              <button type="submit">Send</button>
            </form>
            </ContentBox>
        </Box>
      </Layout>
    </div>
  )
}
