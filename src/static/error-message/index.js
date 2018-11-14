import React from 'react'
import { ErrorPage, ErrorMessage } from './style'

export default function StaticErrorPage() {
  return (
    <ErrorPage>
      <ErrorMessage>
        It looks like aliens have stolen your internet!
      </ErrorMessage>
    </ErrorPage>
  )
}
