import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Box } from '../components/Box'
import { Form } from '../components/Form'
import { type FormEvent, useState, type ChangeEvent } from 'react'

export { getServerSideProps } from './../api/pages/contact'

export default function AboutPage({ title, mobileTitle, tagline, content, accent, image, footer }): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (formData.spot1.length > 0 || formData.spot2.length > 0 || formData.spot3.length > 0) {
      console.log('Spam detected')
    } else {
      console.log('Form submitted')
    }
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    spot1: '',
    spot2: '',
    spot3: ''
  })

  const handleFormData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <Box>
          <ContentBox count={1} headline={'Who am I'} copy={content}>
            <Form onSubmit={handleSubmit}>
              {/* Real Fields */}
              <Form.Input onChange={handleFormData} type="text" value={formData.name} label="Name" required name="namewerdsf" />
              <Form.Input onChange={handleFormData} type="text" value={formData.email} label="Email" required name="emaillkew" />
              <Form.TextArea onChange={handleFormData} value={formData.message} label="Message" required name="messagesdfsds" />

              {/* Hidden Fields */}
              <Form.HoneyPot>
                <Form.Input type="text" label="Real Name" autocomplete="off" value={formData.spot1} onChange={handleFormData} name="name" />
                <Form.Input type="text" label="Real Email" autocomplete="off" value={formData.spot2} onChange={handleFormData} name="email" />
                <Form.TextArea label="Product You're asking about" value={formData.spot3} onChange={handleFormData} name="message" />
              </Form.HoneyPot>
            </Form>
          </ContentBox>
        </Box>
      </Layout>
    </div>
  )
}
