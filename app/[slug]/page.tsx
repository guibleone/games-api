import SingleCard from '@/components/single-card'
import { fetchSingleGame } from '@/data'
import { Metadata } from 'next'
import React from 'react'

export default  async function SingleGamePage({
  params
}:
{
  params: {
    slug: string
  }
}) {

  const { slug } = params
  const game = await fetchSingleGame(slug)
  
  return (
    <div className='py-10 '>
      <SingleCard game={game[0]} />
    </div>
  )
}
