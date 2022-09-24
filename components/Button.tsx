import { IconType } from 'react-icons'
import classNames from 'classnames'
import { useMemo } from 'react'

type Props = {
  onClick?(): void
  href?: string
  LeftIcon?: IconType
  RightIcon?: IconType
  text?: string
  title?: string
  secondary?: boolean
  disabled?: boolean
}
export const Button = ({
  onClick,
  LeftIcon,
  RightIcon,
  text,
  secondary,
  title,
  href,
  disabled,
  ...rest
}: Props) => {
  const type = useMemo(() => (secondary ? 'secondary' : 'primary'), [secondary])
  const iconOnly = !text
  const ButtonOrA = (props) => {
    if (typeof href === 'string') {
      return <a {...props} {...rest} />
    }
    return <button {...props} {...rest} />
  }

  return (
    <>
      <ButtonOrA
        className={classNames(
          'neon-button group transition-width transition-all border-2 rounded-full py-1 px-3 cursor-pointer block flex items-center justify-center text-gray-100 font-bold capitalize',
          {
            'gap-1': !iconOnly,
            'hover:scale-105 hover:gap-2': !iconOnly && !disabled,
            'min-w-[44px] min-h-[44px]': iconOnly,
            'opacity-50 cursor-not-allowed': disabled,
          }
        )}
        onClick={onClick}
        href={href}
        disabled={disabled}
        title={title || text}
      >
        {LeftIcon && <LeftIcon />}
        {text && <span>{text}</span>}
        {title && (
          <span className="transition-all max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-1">
            {title}
          </span>
        )}
        {RightIcon && <RightIcon />}
      </ButtonOrA>
      <style jsx>{`
        .neon-button {
          --neon-bright: var(--color-${type}-1);
          --neon-background: var(--color-${type}-9);
          --neon-shadow: var(--color-${type}-6);
        }
        :global(body.dark) .neon-button {
          --neon-bright: var(--color-${type}-9);
          --neon-background: var(--color-${type}-2);
          --neon-shadow: var(--color-${type}-4);
        }
        .neon-button {
          color: var(--neon-bright);
          background: var(--neon-background);
          border: 2px solid var(--neon-bright);
          box-shadow: 0px 0px 16px 2px var(--neon-shadow),
            inset 2px 2px 12px 2px var(--neon-shadow);
          border-radius: 999px;
        }
        .neon-button:hover {
          background: var(--neon-shadow);
          box-shadow: 0px 0px 32px 2px var(--neon-shadow),
            inset 2px 2px 12px 2px var(--neon-shadow);
        }
      `}</style>
    </>
  )
}
