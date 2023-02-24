import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const btnLink = defineStyle({
    textDecoration: 'none',
    
  });

export const linkTheme = defineStyleConfig({

    defaultProps: {
        size: 'xl',
        variant: 'btnLink',
        colorScheme: 'brandBtn',
      },
})