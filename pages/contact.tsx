import Head from 'next/head'
import { Layout } from '../components/Layout'
import { ContentBox } from '../components/ContentBox'
import { Box } from '../components/Box'
import { Form } from '../components/Form'
import { type FormEvent, useState, type ChangeEvent } from 'react'
import { Button } from '../components/Button'
// import { encode } from '../utilities/encode'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../utilities/validateEmail'
export { getStaticProps } from './../api/pages/contact'

export default function ContactPage({ title, mobileTitle, tagline, content, accent, image, footer }): JSX.Element {
  const initialData = {
    namewerdsf: '',
    emaillkew: '',
    messagesdfsds: '',
    name: '',
    email: '',
    message: ''
  }

  const [isLoading, toggleIsLoading] = useState(false)
  const [formData, setFormData] = useState(initialData)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    toggleIsLoading(true)
    if (formData.name.length > 0 || formData.email.length > 0 || formData.message.length > 0) {
      console.log('Spam detected')
    } else {
      try {
        if (!validateEmail(formData.emaillkew)) {
          throw new Error('Invalid email')
        }
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
          {
            from_name: formData.namewerdsf,
            from_email: formData.emaillkew,
            message: formData.messagesdfsds
          }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
        )
        setFormData(initialData)
        alert('Thanks for contacting me, I will get back to you soon!')
      } catch (err) {
        console.error(err)
        alert("We can't submit the form, try again later?")
      }
    }
    toggleIsLoading(false)
  }

  const handleFormData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title} mobileTitle={mobileTitle} tagline={tagline} accent={accent} footer={footer}>
        <Box>
          <ContentBox count={1} headline={'Get a hold of me'} copy={content}>
            <Form onSubmit={handleSubmit} action="/success" isNetlifyForm={true} name="contact">
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
              <Button disabled={isLoading} variant="secondary" type='submit'>Send</Button>
            </Form>
          </ContentBox>
        </Box>
      </Layout>
    </>
  )
}
