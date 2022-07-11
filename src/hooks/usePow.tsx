import { useMemo } from 'react'

export const usePow = (list: number[]) => {
  return useMemo(() => {
    return (
      <div>
        {list.map((item, idx) => (
          <p key={idx}>{Math.pow(item, 2)}</p>
        ))}
      </div>
    )
  }, [list])
}
