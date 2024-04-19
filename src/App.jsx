import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopUser from './components/Popups/PopUser/PopUser'
import { cardList, statusList } from './data'



function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true)

  function onCardAdd() {
    const newCard = {
        id: cards.length + 1,
        topic: "Web Design",
        title: "Название задачи",
        date: new Date().toLocaleDateString(),
        status: statusList[0]
    }
    setCards([...cards, newCard])
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header onCardAdd={onCardAdd}/>
      
      {isLoading ? <p>Данные загружаются...</p> : <Main cards={cards}/>}
		</div>
  )
}

export default App
