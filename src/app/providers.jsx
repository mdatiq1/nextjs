// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }) {
  return <div className='maincomp'>
     <ChakraProvider>{children}</ChakraProvider>
  </div>
}