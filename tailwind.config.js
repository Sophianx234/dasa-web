/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  fontFamily: {
		sans: 'Rethink Sans, sans-serif',
	  },
	  extend: {
		fontFamily: {
		  nato: 'Nato Sans',
		  rethink: 'Rethink Sans',
		  mulish: 'Mulish',
		  poppins: 'Poppins',
		  Montserrat: 'Montserrat',
		  lobster: 'Lobster',
		  chewy: 'Chewy',
		  inter: 'Inter',
		  quicksand: 'Quick-sand'
		},
		colors: {
		  dasalight: '#FEF3E7',
		  dasadeep: '#ffd8a8',
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		boxShadow: {
		  top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)', // Custom top shadow
		  'top-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1)', // Larger custom top shadow
		},
		keyframes: {
		  'accordion-down': {
			from: {
			  height: '0',
			},
			to: {
			  height: 'var(--radix-accordion-content-height)',
			},
		  },
		  'accordion-up': {
			from: {
			  height: 'var(--radix-accordion-content-height)',
			},
			to: {
			  height: '0',
			},
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
	  },
	  daisyui:{
		theme: false
	  }
	},
	plugins: [require("tailwindcss-animate"), require('daisyui')],
	 daisyui: {
    themes: ["light"], // Keep only the light theme or other themes you prefer
  },
  };
  