export interface LayoutProps {
  children: React.ReactNode
  title: string
  mobileTitle: string
  tagline: string
  accent: string
  footer: string
  hero?: {
    text: string
    subtext?: string
    image?: {
      src: string
      alt: string
    }
  }
}
