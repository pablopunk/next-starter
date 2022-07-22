import useTheme from 'hooks/useTheme'
import { FunctionComponent } from 'react'
import { BsSun, BsMoon, BsGithub } from 'react-icons/bs'

const LinkComponent = ({
  text,
  Icon,
  href,
  onClick,
}: {
  text?: string
  Icon: any
  href?: string
  onClick?(): void
}) => (
  <button
    type="button"
    className="px-2 py-1 ml-2 border rounded-md bg-bg focus:outline-none shadow-sm hover:shadow-md transition-all hover:text-accent h-10 w-10 inline-flex items-center justify-center"
    title={text || href}
    onClick={() => {
      if (href) {
        window.location.href = href
      } else {
        onClick?.()
      }
    }}
  >
    {text && text}
    {Icon && <Icon />}
  </button>
)

type Props = {}

export const Nav: FunctionComponent<Props> = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <nav>
      <LinkComponent
        href="https://github.com/pablopunk/next-starter"
        Icon={BsGithub}
      />
      <LinkComponent
        onClick={toggleTheme}
        Icon={theme === 'dark' ? BsMoon : BsSun}
      />
    </nav>
  )
}
