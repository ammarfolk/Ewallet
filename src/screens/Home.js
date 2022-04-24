import React, { useState } from 'react'
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
import { ADDCARD_Path } from '../model/routes'
import { Link } from "react-router-dom";

const Home = ({ cards }) => {
  const [activeCard, SetActiveCard] = useState(null);
  if (!activeCard && cards.length) {
    SetActiveCard(cards[0])
  }

  return (
    <section>
      <Top title={"E-Wallet"} />
      <Card cardData={activeCard} isActiveCard />
      <CardStack
        cards={cards.filter(card => card !== activeCard)}
        onClick={(clickedCard) => SetActiveCard(clickedCard)}
      />
      <Link to={ADDCARD_Path}>
        <button>Add a new card</button>
      </Link>
    </section>
  )
}

export default Home