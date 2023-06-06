import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Image } from '../components/Image'

export { getServerSideProps } from './../api/pages/work'

export default function ResumePage({ title, mobileTitle, tagline, content, image, companies, accent, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        {companies.map(company => {
          const src = company.image.props.src
          return (
            <ContentBox minHeight={false} key={company._key} count={1} headline={company.company}>
              {/* <Image fill={false} width={400} height={200} src={src} classes="blockImage" alt={company.company} /> */}
              <p>{company.description}</p>
            </ContentBox>
          )
        })}
      </Layout>
    </div>
  )
}
