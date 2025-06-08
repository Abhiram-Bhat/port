
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) rotate(120deg)'
					},
					'66%': {
						transform: 'translateY(-10px) rotate(240deg)'
					}
				},
				'enhanced-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg) scale(1)',
						opacity: '0.6'
					},
					'25%': {
						transform: 'translateY(-30px) rotate(90deg) scale(1.1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(180deg) scale(0.9)',
						opacity: '1'
					},
					'75%': {
						transform: 'translateY(-40px) rotate(270deg) scale(1.2)',
						opacity: '0.7'
					}
				},
				'slide-text': {
					'0%, 15%': {
						transform: 'translateY(0)',
						opacity: '1'
					},
					'20%, 35%': {
						transform: 'translateY(-100%)',
						opacity: '1'
					},
					'40%, 55%': {
						transform: 'translateY(-200%)',
						opacity: '1'
					},
					'60%, 75%': {
						transform: 'translateY(-300%)',
						opacity: '1'
					},
					'80%, 95%': {
						transform: 'translateY(-400%)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-500%)',
						opacity: '0'
					}
				},
				'stagger-fade-in': {
					'from': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'enhanced-pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(34, 197, 94, 0.8), 0 0 80px rgba(34, 197, 94, 0.4)',
						transform: 'scale(1.05)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) translateY(-100px)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05) translateY(0)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'from': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'rotate-scale': {
					'0%, 100%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.2)'
					}
				},
				'geometric-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg) scale(1)'
					},
					'33%': {
						transform: 'translateY(-40px) rotate(120deg) scale(1.1)'
					},
					'66%': {
						transform: 'translateY(-20px) rotate(240deg) scale(0.9)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'enhanced-float': 'enhanced-float 8s ease-in-out infinite',
				'slide-text': 'slide-text 10s ease-in-out infinite',
				'stagger-fade-in': 'stagger-fade-in 0.8s ease-out forwards',
				'enhanced-pulse-glow': 'enhanced-pulse-glow 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease infinite',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'slide-up': 'slide-up 0.6s ease-out',
				'rotate-scale': 'rotate-scale 6s ease-in-out infinite',
				'geometric-float': 'geometric-float 12s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
