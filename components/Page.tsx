import { FunctionComponent } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {}

export const Page: FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    <main className="max-w-[1300px] p-4 mx-auto">{children}</main>
    <Footer />
    <style jsx>{`
      main {
        position: relative;
        min-height: calc(100vh - var(--header-height) - var(--footer-height));
      }
    `}</style>
  </>
)
