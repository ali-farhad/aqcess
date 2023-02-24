import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

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
