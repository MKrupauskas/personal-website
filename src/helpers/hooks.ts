import { useEffect, useState } from 'react'

export function useUseMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return mounted
}
