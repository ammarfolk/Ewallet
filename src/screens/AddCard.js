import React from 'react'
import CardForm from '../components/CardForm'
import Card from '../components/Card'
import Top from '../components/Top'

const AddCard = ({ onCardAdded }) => {

  return (
    <section>
      <Top title={"Add a new bank card"} />
      <Card />
      <CardForm onNewCardSubmitted={
        (newCard) => {
          onCardAdded(newCard)
        }
      } />
    </section>
  )
}

export default AddCard