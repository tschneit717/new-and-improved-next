import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Box } from '../components/Box'
import { Form } from '../components/Form'
import { type FormEvent, useState, type ChangeEvent } from 'react'
import { Button } from '../components/Button'
import { encode } from '../utilities/encode'

export { getServerSideProps } from './../api/pages/contact'

export default function AboutPage({ title, mobileTitle, tagline, content, accent, image, footer }): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    if (formData.name.length > 0 || formData.email.length > 0 || formData.message.length > 0) {
      console.log('Spam detected')
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', formData })
      })
        .then(() => { alert('Success!') })
        .catch(error => { alert(error) })

      e.preventDefault()
    }
  }
  const [formData, setFormData] = useState({
    namewerdsf: '',
    emaillkew: '',
    messagesdfsds: '',
    name: '',
    email: '',
    message: ''
  })

  const handleFormData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log(event)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
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
          <ContentBox count={1} headline={'Get a hold of me'} copy={content}>
            <Form onSubmit={handleSubmit}>
              {/* Real Fields */}
              <Form.Input onChange={handleFormData} type="text" value={formData.namewerdsf} label="Name" required name="namewerdsf" />
              <Form.Input onChange={handleFormData} type="text" value={formData.emaillkew} label="Email" required name="emaillkew" />
              <Form.TextArea onChange={handleFormData} value={formData.messagesdfsds} label="Message" required name="messagesdfsds" />

              {/* Hidden Fields */}
              <Form.HoneyPot>
                <Form.Input type="text" label="Real Name" autocomplete="off" value={formData.name} onChange={handleFormData} name="name" />
                <Form.Input type="text" label="Real Email" autocomplete="off" value={formData.email} onChange={handleFormData} name="email" />
                <Form.TextArea label="Product You're asking about" value={formData.message} onChange={handleFormData} name="message" />
              </Form.HoneyPot>
              <Button variant="secondary" type='submit'>Send</Button>
            </Form>
          </ContentBox>
        </Box>
      </Layout>
    </div>
  )
}
