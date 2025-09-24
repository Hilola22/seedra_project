import { memo } from 'react'
import { Hero } from '@/widgets/hero'
import { Products } from '@/widgets/products'

export const Home = memo(() => {
  return (
    <div>
      <Hero/>
      <Products/>
    </div>
  )
})