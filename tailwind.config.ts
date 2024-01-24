import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-grid-background': "url('/images/backgrounds/bluegrid-background.png')",
        'lightblue-grid-background': "url('/images/backgrounds/lightbluegrid-background.png')",
        'hero-banner-main': "url('/images/hero-banners/hero-banner-main.png')",
      },
      fontFamily: {
        Font: [ 'Font', 'serif' ],
      },
      animation: {
        'fast-pulse': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config