// TODO

import { useEffect, useState } from 'react'

// 1. copied from: https://github.com/pmndrs/zustand/issues/938#issuecomment-1481801942
export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

// 2. Use next/dynamic
// https://github.com/pmndrs/zustand/issues/938#issuecomment-1575484525

// 3. Create a special client and server version
// https://github.com/pmndrs/zustand/issues/938#issuecomment-1692651668

// 4. Simple null check
// https://github.com/pmndrs/zustand/issues/938#issuecomment-1712908635

// 5. Created persisted store
// https://github.com/pmndrs/zustand/issues/1145#issuecomment-1556132781



// A link to my reproduction:
// https://stackblitz.com/edit/stackblitz-starters-yxevax?file=app%2Fpage.tsx