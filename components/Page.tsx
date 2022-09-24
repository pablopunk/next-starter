import useTheme from 'hooks/useTheme'
import { FunctionComponent } from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { Button } from 'components/Button'

type Props = {}

export const Page: FunctionComponent<Props> = ({ children }) => {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <nav className="absolute top-3 left-3 z-10">
        <Button onClick={toggleTheme} title={theme} LeftIcon={BsMoonStarsFill} />
      </nav>
      <main className="relative max-w-[1300px] mx-auto md:min-h-[100vh]">{children}</main>
    </>
  )
}
