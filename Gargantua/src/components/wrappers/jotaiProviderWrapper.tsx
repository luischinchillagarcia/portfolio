"use client"

import { Provider } from 'jotai'


export default function ProviderWrapper({ children }: { children: React.ReactNode}) {
  return (
    <Provider>
      { children }
    </Provider>
  )
}

export { ProviderWrapper }
