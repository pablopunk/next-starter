import { FunctionComponent } from 'react'
import Link from 'next/link'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

type Props = {}

const Page: FunctionComponent<Props> = () => (
  <nav>
    {LINKS.map((link) => (
      <Link key={link.href} href={link.href}>
        <a className="p-2 transition-colors text-accent hover:text-accent2">
          {link.label}
        </a>
      </Link>
    ))}
  </nav>
)

export default Page
