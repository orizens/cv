/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cv-highlight': '#24d5bb',
        'cv-highlight-lighter': '#24d5bb',
        'cv-text': '#333',
        'cv-light': '#fff',
        'cv-bg': 'rgba(255, 255, 255, 0.75)',
        'cv-section-bg': '#f8f8f8',
        'cv-box-bg': '#24d5bb1c',
        'cv-box-border': '#ededed',
        'cv-border': '#f0efef',
        // New header colors
        'ink': '#333',
        'paper': '#fff',
        'muted': '#666',
        'border': '#e0e0e0',
      },
      maxWidth: {
        'cv': '980px',
      },
      screens: {
        'xs': '360px',
        'sm': '600px',
        'md': '900px',
      },
      fontSize: {
        'para': '1.1rem',
        'para-default': '1rem',
        '2xs': '0.625rem',
      },
      boxShadow: {
        'section': '0 5px 6px -6px #24d5bb',
      },
      backdropBlur: {
        'section': '5px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const printUtilities = {
        // Typography
        '.print-text-sm': {
          '@media print': { fontSize: '14px' }
        },
        '.print-text-base': {
          '@media print': { fontSize: '1rem' }
        },
        '.print-text-15px': {
          '@media print': { fontSize: '15px' }
        },
        '.print-text-38px': {
          '@media print': { fontSize: '38px' }
        },
        '.print-text-black': {
          '@media print': { color: '#000 !important' }
        },
        '.print-font-bold': {
          '@media print': { fontWeight: 'bold' }
        },
        
        // Layout & Spacing
        '.print-p-0': {
          '@media print': { padding: '0' }
        },
        '.print-p-10px': {
          '@media print': { padding: '10px' }
        },
        '.print-pt-0': {
          '@media print': { paddingTop: '0' }
        },
        '.print-pb-0': {
          '@media print': { paddingBottom: '0' }
        },
        '.print-m-0': {
          '@media print': { margin: '0' }
        },
        '.print-mb-5px': {
          '@media print': { marginBottom: '5px' }
        },
        '.print-mb-10px': {
          '@media print': { marginBottom: '10px' }
        },
        '.print-mt-10px': {
          '@media print': { marginTop: '10px' }
        },
        '.print-my-10px': {
          '@media print': { marginTop: '10px', marginBottom: '10px' }
        },
        
        // Backgrounds & Borders
        '.print-border-none': {
          '@media print': { border: 'none' }
        },
        '.print-bg-transparent': {
          '@media print': { backgroundColor: 'transparent' }
        },
        '.print-bg-white': {
          '@media print': { backgroundColor: 'white' }
        },
        '.print-no-bg': {
          '@media print': { 
            backgroundImage: 'none',
            backgroundColor: 'transparent' 
          }
        },
        '.print-no-rounded': {
          '@media print': { borderRadius: '0' }
        },
        
        // Effects
        '.print-static': {
          '@media print': { position: 'static !important' }
        },
        '.print-no-shadow': {
          '@media print': { boxShadow: 'none' }
        },
        '.print-no-backdrop': {
          '@media print': { backdropFilter: 'none' }
        },
        '.print-z-auto': {
          '@media print': { zIndex: 'auto' }
        },
        
        // Sizing
        '.print-w-80px': {
          '@media print': { width: '80px' }
        },
        '.print-w-full': {
          '@media print': { width: '100%' }
        },
        
        // Page breaks
        '.print-break-inside-avoid': {
          '@media print': { breakInside: 'avoid' }
        },
        '.print-break-after-avoid': {
          '@media print': { breakAfter: 'avoid' }
        },
        
        // Text alignment
        '.print-text-left': {
          '@media print': { textAlign: 'left' }
        },
      };
      addUtilities(printUtilities);
    }
  ],
}
