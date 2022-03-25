import { SITE_NAME } from 'config'
import { FunctionComponent } from 'react'

type Props = {}

export const Footer: FunctionComponent<Props> = () => (
  <footer className="flex items-center justify-center h-footer bg-bgDim">
    © {SITE_NAME} {new Date().getFullYear()}
  </footer>
)
