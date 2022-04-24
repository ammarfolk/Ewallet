import React from 'react'
import Card from './Card'

const CardStack = ({ cards, onClick }) => {
    return (
        <section className="otherCards">
            {cards.map(card => {
                return <Card key={card.card_number} cardData={card} onClick={onClick} />
            })}
        </section>
    )
}

export default CardStack