import Head from 'next/head'
import { Layout } from '../components/Layout'

export { getServerSideProps } from './../api/pages/uses'

export default function UsesPage({ title, mobileTitle, tagline, content, image, accent, footer, uses }): JSX.Element {
  const organizedUses = uses.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = []
    }
    acc[curr.category].push(curr)
    return acc
  }, {})

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <h1 className='font-xl'>Uses</h1>
        <p className='mb-6'>{content.map(item => item.content)}</p>
          {Object.keys(organizedUses).map(category => {
            return (
            <div key={category} className="mb-8">
              <h2 className="font-lg" key={category}>{category}</h2>
              <ul>
                {organizedUses[category].map(use => (
                  <li key={use._id}>
                    <h3 className='font-md mb-2'>{use.title}</h3>
                  <p>{use.details}</p>
                  {use.slug ? <a href={use.slug} target="_blank" rel="noopener noreferrer" className='color-primary'>{'Link'}</a> : null}
                </li>
                ))}
              </ul>
            </div>
            )
          }
          )}
      </Layout>
    </div>
  )
}
