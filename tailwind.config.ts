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
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '100': '100px',
        '70': '70px',
        '49': '49px',
        '40': '40px',
        '21': '21px',
        '20': '20px',
        '30': '30px',
        '35': '35px',
        '26': '26px',
        '25': '25px',
        '24': '24px',
        '19': '19px',
        '18': '18px',
        '17': '17px',
        '16': '16px',
        '15': '15px',
        '13': '13px',
        'title': '22px',
        'voice': '15px',
      },
      fontWeight: {
        thin: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      textColor: {
        white: '#ffffff',
        black: '#000000',
        gray: 'rgba(60, 60, 67, 0.6)',
      },
    },
  },
  plugins: [],
}
export default config
