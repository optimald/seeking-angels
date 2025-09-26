/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'fraunces': ['var(--font-fraunces)', 'serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
        'kumbh': ['var(--font-kumbh-sans)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'sans': ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
