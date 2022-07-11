import React, { FC } from 'react'
import { usePow } from '@/hooks/usePow'

const Pow: FC = () => {
  const pow = usePow([1, 2, 3])
  return <>usePow: {pow}</>
}

export default Pow
