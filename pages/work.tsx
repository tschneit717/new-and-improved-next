import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Image } from '../components/Image'

export { getServerSideProps } from './../api/pages/work'

export default function ResumePage({ title, mobileTitle, tagline, content, companies, accent, footer }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        {companies.map(company => {
          console.log(company.image.props.src)
          return (
            <ContentBox key={company._key} count={1} headline={company.company}>
              <div className="">
                <Image src={company.image.props.src} alt={company.company}/>
              </div>
              <p>{company.description}</p>
            </ContentBox>
          )
        })}
      </Layout>
    </div>
  )
}
