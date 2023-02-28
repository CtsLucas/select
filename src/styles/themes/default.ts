export const defaultTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    danger: {
      300: '#fca5a5',
      500: '#ef4444',
      700: '#b91c1c',
    },
    success: {
      300: '#bef264',
      500: '#22c55e',
      700: '#4d7c0f',
    },
    zinc: {
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    indigo: {
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    background: {
      indigo: {
        20: 'rgba(49, 46, 129, 0.2)',
      },
      opacity: {
        50: 'rgba(0, 0, 0, 0.5)',
      },
      journeys: {
        frontEnd: '#146666',
        backEnd: '#A62947',
        digitalSkills: '#7E29A6',
        data: '#0E7306',
      },
    },
  },
} as const;
