import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './screens/Home';
import AddCard from './screens/AddCard';
import { HOME_PATH, ADDCARD_Path } from './model/routes'
import React, { useState } from 'react'
import { defaultCards } from './model/cardsData'

function App() {
  const [cards, SetCards] = useState(defaultCards)
  let navigate = useNavigate();

  return (
    <section className="container">
      <Routes>
        <Route path={HOME_PATH} element={<Home cards={cards} />} />
        <Route path={ADDCARD_Path}
          element={<AddCard
            onCardAdded={(newCard) => {
              cards.push(newCard)
              let updatedCards = cards
              SetCards(updatedCards)
              navigate(HOME_PATH)
            }} />}
        />
      </Routes>
    </section>
  );
}

export default App;
