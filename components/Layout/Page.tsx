import Header from './Header'
import { FunctionComponent } from 'react'
import Footer from './Footer'

type Props = {}

const Page: FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    <main className="max-w-4xl p-4 mx-auto bg-green-200">{children}</main>
    <Footer />
    <style jsx>{`
      main {
        position: relative;
        min-height: calc(100vh - var(--header-height) - var(--footer-height));
      }
    `}</style>
  </>
)

export default Page
