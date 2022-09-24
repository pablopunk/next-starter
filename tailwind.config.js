module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'neutral-1': 'var(--color-neutral-1)',
        'neutral-2': 'var(--color-neutral-2)',
        'neutral-3': 'var(--color-neutral-3)',
        'neutral-4': 'var(--color-neutral-4)',
        'neutral-5': 'var(--color-neutral-5)',
        'neutral-6': 'var(--color-neutral-6)',
        'neutral-7': 'var(--color-neutral-7)',
        'neutral-8': 'var(--color-neutral-8)',
        'neutral-9': 'var(--color-neutral-9)',
        'neutral-10': 'var(--color-neutral-10)',
        'primary-1': 'var(--color-primary-1)',
        'primary-2': 'var(--color-primary-2)',
        'primary-3': 'var(--color-primary-3)',
        'primary-4': 'var(--color-primary-4)',
        'primary-5': 'var(--color-primary-5)',
        'primary-6': 'var(--color-primary-6)',
        'primary-7': 'var(--color-primary-7)',
        'primary-8': 'var(--color-primary-8)',
        'primary-9': 'var(--color-primary-9)',
        'primary-10': 'var(--color-primary-10)',
        'primary-11': 'var(--color-primary-11)',
        'primary-12': 'var(--color-primary-12)',
        'secondary-1': 'var(--color-secondary-1)',
        'secondary-2': 'var(--color-secondary-2)',
        'secondary-3': 'var(--color-secondary-3)',
        'secondary-4': 'var(--color-secondary-4)',
        'secondary-5': 'var(--color-secondary-5)',
        'secondary-6': 'var(--color-secondary-6)',
        'secondary-7': 'var(--color-secondary-7)',
        'secondary-8': 'var(--color-secondary-8)',
        'secondary-9': 'var(--color-secondary-9)',
        'secondary-10': 'var(--color-secondary-10)',
        transparent: 'transparent',
      },
      spacing: {
        header: 'var(--header-height)',
        footer: 'var(--footer-height)',
      },
      transitionProperty: {
        'width': 'max-width, opacity, margin'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
