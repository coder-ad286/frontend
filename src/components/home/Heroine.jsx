import React, { useEffect, useState } from 'react'
import HeroineCard from './HeroineCard'
import { getData } from '../../data/services'
import Heading from '../Heading'
const Heroine = () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    setCards(getData());
  }, [])
  // AMAZING SERVICES
  return (
    <div id='services' className='max-w-[1280px] mx-auto flex flex-col mt-5'>

      {/* Title : Amazing Servicces */}
      <Heading name={'Amazing Services'} x={-100} />


      {/* Amazing Services Card Using Grid */}
      {cards.length && <div className="flex flex-wrap justify-center mb-10">
        <HeroineCard data={cards[0]} delay={0} />
        <HeroineCard data={cards[1]} delay={1} />
        <HeroineCard data={cards[2]} delay={2} />
        <HeroineCard data={cards[3]} delay={3} />
        <HeroineCard data={cards[4]} delay={4} />
      </div>}



    </div>

  )
}

export default Heroine