/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts,tsx}', 'node_modules/kmc-design-system/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed'],
      karla: ['Karla'],
    },
    extend: {
      fontSize: {
        xl: ['20px', '26px'],
        lg: ['18px',  '24px'],
        base: ['16px','22px'],
        sm: ['14px', '20px'],
        xs: ['12px', '18px'],
        tiny: ['10px', '16px'],
      },
      boxShadow: {
        'sm-1': '0px 0px 2px rgba(14, 31, 53, 0.12)',
        'sm-2': '0px 2px 4px rgba(14, 31, 53, 0.12)',
        'sm-3': '0px 3px 7px rgba(14, 31, 53, 0.12)',
        'sm-4': '0px 4px 8px rgba(14, 31, 53, 0.16)',
        'md-1':
          '0px 2px 4px rgba(14, 31, 53, 0.06), 0px 6px 12px rgba(14, 31, 53, 0.08), 0px 12px 20px rgba(14, 31, 53, 0.06)',
        'md-2':
          '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',
        'md-3':
          '0px 4px 8px rgba(14, 31, 53, 0.1), 0px 8px 16px rgba(14, 31, 53, 0.16), 0px 16px 28px -1px rgba(14, 31, 53, 0.1)',
        'md-4':
          '0px 6px 10px rgba(14, 31, 53, 0.12), 0px 12px 18px rgba(14, 31, 53, 0.2), 0px 20px 40px -1px rgba(14, 31, 53, 0.12)',
        'lg-1':
          '0px 5px 10px rgba(14, 31, 53, 0.06), 0px 10px 20px rgba(14, 31, 53, 0.12), 0px 16px 24px -1px rgba(14, 31, 53, 0.12), 0px 20px 38px -2px rgba(14, 31, 53, 0.06)',
        'lg-2':
          '0px 5px 10px rgba(14, 31, 53, 0.08), 0px 10px 20px rgba(14, 31, 53, 0.16), 0px 24px 32px -1px rgba(14, 31, 53, 0.16), 0px 32px 64px -2px rgba(14, 31, 53, 0.08)',
        'lg-3':
          '0px 5px 10px -1px rgba(14, 31, 53, 0.06), 0px 10px 20px -2px rgba(14, 31, 53, 0.1), 0px 16px 32px -3px rgba(14, 31, 53, 0.12), 0px 32px 64px -4px rgba(14, 31, 53, 0.14), 0px 40px 72px -5px rgba(14, 31, 53, 0.24)',
        'lg-4':
          '0px 5px 10px -1px rgba(14, 31, 53, 0.06), 0px 10px 20px -2px rgba(14, 31, 53, 0.1), 0px 16px 32px -3px rgba(14, 31, 53, 0.12), 0px 32px 64px -4px rgba(14, 31, 53, 0.14), 0px 56px 84px -5px rgba(14, 31, 53, 0.32)',
      },
      colors: {
        'branding-navy': '#001738',
        'branding-white': '#FFFFFF',
        'branding-pumpkin': '#FF7200',
        'branding-black': '#000000',
        'branding-rich-black': '#111622',
        'branding-light-blue': '#CEDDEF',
        'main-heading': '#2C2C2C',
        'main-text': '#4B4B4B',
        'main-body': '#6E6E6E',
        'main-disabled': '#B3B3B3',
        'main-success': '#008060',
        'main-warning': '#916A00',
        'main-danger': '#D72C0D',
        'main-info': '#2C6ECB',
        'main-accent': '#FF7200',
        'main-white': '#FFFFFF',
        'surface-primary-neutral': '#FFF4EB',
        'surface-primary-hovered': '#FFE9D8',
        'surface-primary-pressed': '#FFDEC4',
        'surface-success-neutral': '#F1F8F5',
        'surface-success-hovered': '#ECF6F1',
        'surface-success-pressed': '#E2F1EA',
        'surface-warning-neutral': '#FFF5EA',
        'surface-warning-hovered': '#FFF2E2',
        'surface-warning-pressed': '#FFEBD3',
        'surface-danger-neutral': '#FFF4F4',
        'surface-danger-hovered': '#FFF0F0',
        'surface-danger-pressed': '#FFE9E8',
        'surface-info-neutral': '#F2F7FE',
        'surface-info-hovered': '#EDF4FE',
        'surface-info-pressed': '#E5EFFD',
        'interactive-primary-neutral': '#FF7200',
        'interactive-primary-hovered': '#FF8827',
        'interactive-primary-pressed': '#EB6900',
        'interactive-secondary-neutral': '#FFFFFF',
        'interactive-secondary-hovered': '#F6F6F7',
        'interactive-secondary-pressed': '#F1F2F3',
        'interactive-success-neutral': '#008060',
        'interactive-success-hovered': '#006E52',
        'interactive-success-pressed': '#005E46',
        'interactive-warning-neutral': '#E68619',
        'interactive-warning-hovered': '#DA7B11',
        'interactive-warning-pressed': '#BD640D',
        'interactive-danger-neutral': '#D82C0D',
        'interactive-danger-hovered': '#BC2200',
        'interactive-danger-pressed': '#A21B00',
        'interactive-info-neutral': '#2C6ECB',
        'interactive-info-hovered': '#1F5199',
        'interactive-info-pressed': '#103262',
        'interactive-disabled': '#F6F6F7',
        gray: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EAEAEA',
          300: '#E1E1E1',
          400: '#CACACA',
          500: '#B3B3B3',
          600: '#8E8E8E',
          700: '#6E6E6E',
          800: '#4B4B4B',
          900: '#2C2C2C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};