import type { AppProps } from 'next/app'
import { Nunito_Sans } from '@next/font/google'
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'

const inter = Nunito_Sans({ subsets: ['latin'],weight: ['200', '300', '600', '700', '800', '900'] })

const theme = extendTheme({
  colors: {
    brandBtn: {
      500: '#1D71F7',
      600: '#0858d9',  
    },
  },
  fonts: {
    body: inter.style.fontFamily,
    heading: inter.style.fontFamily,
},
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
    )
}
