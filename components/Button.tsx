import { IconType } from "react-icons"
import classNames from 'classnames'
import { useMemo } from "react"

type Props = {
  onClick(): void
  LeftIcon?: IconType
  RightIcon?: IconType
  text?: string
  title?: string
  secondary?: boolean
}
export const Button = ({ onClick, LeftIcon, RightIcon, text, secondary, title }: Props) => {
  const type = useMemo(() => secondary ? 'secondary' : 'primary', [secondary])
  const iconOnly = !text

  return (
    <>
      <button
        className={classNames("group transition-width border-2 rounded-full py-1 px-3 cursor-pointer block flex items-center justify-center text-gray-100 hover:scale-105 font-bold capitalize", {
          'gap-1': !iconOnly,
          'min-w-[44px] min-h-[44px]': iconOnly
        }
        )}
        onClick={onClick}
        title={title || text}
      >
        {LeftIcon && <LeftIcon />}
        {text && <span>{text}</span>}
        {title && <span className="transition-all max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-1">{title}</span>}
        {RightIcon && <RightIcon />}
      </button>
      <style jsx>{`
        button {
          --neon-bright: var(--color-${type}-1);
          --neon-background: var(--color-${type}-9);
          --neon-shadow: var(--color-${type}-6);
        }
        :global(body.dark) button {
          --neon-bright: var(--color-${type}-9);
          --neon-background: var(--color-${type}-2);
          --neon-shadow: var(--color-${type}-4);
        }
        button {
          color: var(--neon-bright);
          background: var(--neon-background);
          border: 2px solid var(--neon-bright);
          box-shadow: 0px 0px 16px 2px var(--neon-shadow), inset 2px 2px 12px 2px var(--neon-shadow);
          border-radius: 999px;
        }
        button:hover {
          background: var(--neon-shadow);
          box-shadow: 0px 0px 32px 2px var(--neon-shadow), inset 2px 2px 12px 2px var(--neon-shadow);
        }
      `}</style>
    </>
  )
}
