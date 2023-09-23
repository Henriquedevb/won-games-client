// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
