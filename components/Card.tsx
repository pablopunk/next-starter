import { FaArrowRight } from 'react-icons/fa'
import { Button } from './Button'
import classNames from 'classnames'
import { IconType } from 'react-icons'
import { ReactNode, useMemo } from 'react'

type Props = {
  title: string
  children?: ReactNode | ReactNode[]
  buttonText: string
  Icon: IconType
  secondary?: boolean
}

export const Card = ({ title, children, buttonText, Icon, secondary }: Props) => {
  const type = useMemo(() => secondary ? 'secondary' : 'primary', [secondary])

  return (
    <>
      <article className="neon-card border-2 border-primary-8 w-[400px] p-8 bg-neutral-1 rounded-lg z-auto relative">
        <div className="flex flex-col h-[120px] gap-2">
          <h2 className={classNames("flex gap-1 items-center text-2xl", {
            'text-primary-8': secondary !== true,
            'text-secondary-8': secondary === true,
          })}>
            <Icon />
            <span>{title}</span>
          </h2>
          <div>
            {children}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button text={buttonText} RightIcon={FaArrowRight} onClick={() => { }} secondary={secondary === true} />
        </div>
      </article>
      <style jsx>{`
        article {
          --neon-shadow: var(--color-${type}-3);
          border-color: var(--color-${type}-3);
        }
        :global(body.dark) article {
          --neon-shadow: var(--color-${type}-3);
          border-color: var(--color-${type}-9);
        }
        article:before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
          box-shadow: 0px 0px 48px 16px var(--neon-shadow);
          border-radius: 8px;
        }
      `}</style>
    </>
  )
}
