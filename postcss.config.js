module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 0,
      importFrom: [
        './src/style/vars.css',
        {
          customMedia: {
            '--min-phone': '(min-width: 640px)',
            '--min-tablet': '(min-width: 900px)',
            '--min-desktop': '(min-width: 1200px)',
            '--min-desktop-lg': '(min-width: 1500px)',
            '--max-phone': '(max-width: 600px)',
            '--max-tablet': '(max-width: 999px)',
            '--max-desktop': '(max-width: 1279px)',
            '--max-desktop-lg': '(max-width: 1499px)',
            '--hover': '(hover: hover), (-ms-high-contrast: none), (-ms-high-contrast: active)'
          }
        }
      ],
      features: {
        'color-mod-function': { unresolved: 'warn' }
      }
    })
  ]
}