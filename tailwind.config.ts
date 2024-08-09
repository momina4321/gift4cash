import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#229A73',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage:{
        'heroimg':"url('/BG.svg')",
        'ornament':"url('/Ornament.svg')"
      },
      backgroundSize: {
        'small':'900px'
      },
      backgroundPosition:{
'pos':'220px 140px'
      },
    maxHeight:{
      '900px':'1050px'
    }
    },
  },
  plugins: [],
};
export default config;
