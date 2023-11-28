import localFont from 'next/font/local'

const archia = localFont({
    src: [
      {
        path: '../fonts/Archia-Thin.ttf',
        weight: '100',
      },
      {
        path: '../fonts/Archia-Light.ttf',
        weight: '300',
      },
      {
        path: '../fonts/Archia-Regular.ttf',
        weight: '400',
      },
      {
        path: '../fonts/Archia-Medium.ttf',
        weight: '500',
      },
      {
        path: '../fonts/Archia-Semibold.ttf',
        weight: '600',
      },
      {
        path: '../fonts/Archia-Bold.ttf',
        weight: '700',
      }
    ],
    variable: '--font-archia'
  }) 

export {archia}
