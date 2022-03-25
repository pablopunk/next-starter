import useTheme from 'hooks/useTheme'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import classNames from 'classnames'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Github', href: 'https://github.com/pablopunk/next-starter' },
]

type Props = {}

export const Nav: FunctionComponent<Props> = () => {
  const [theme, toggleTheme] = useTheme()
  const linkStyles =
    'px-2 py-1 ml-2 border rounded-md bg-bg focus:outline-none shadow-sm hover:shadow-md transition-all hover:text-accent'

  return (
    <nav>
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href}>
          <a className={linkStyles}>{link.label}</a>
        </Link>
      ))}
      <button
        className={classNames(
          linkStyles,
          'h-10 w-10 inline-flex items-center justify-center'
        )}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <BsMoon /> : <BsSun />}
      </button>
    </nav>
  )
}
