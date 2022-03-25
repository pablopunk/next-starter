import { SITE_NAME } from 'config'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Nav } from './Nav'

type Props = {}

export const Header: FunctionComponent<Props> = () => (
  <header className="flex items-center justify-between w-full p-4 transition-colors bg-bgDim h-header">
    <Link href="/">
      <a>
        <h1 className="text-2xl transition-colors text-accent hover:text-accent2">
          {SITE_NAME}
        </h1>
      </a>
    </Link>
    <Nav />
  </header>
)
