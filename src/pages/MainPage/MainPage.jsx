import { useEffect, useState } from 'react'
import '../../App.css'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
// import PopBrowse from '../../components/Popups/PopBrowse/PopBrowse'
// import PopNewCard from '../../components/Popups/PopNewCard/PopNewCard'
// import PopUser from '../../components/Popups/PopUser/PopUser'
import { cardList, statusList } from '../../data'
import { GlobalStyle } from '../../components/Global/Global.styled'
import { Wrapper } from '../../styled/common'
import { Outlet } from 'react-router-dom'
import { getCadrs } from '../../api'

function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true)

  function onCardAdd() {
    const newCard = {
        _id: cards.length + 1,
        topic: "Тема",
        title: "Название задачи",
        date: new Date().toLocaleDateString(),
        status: statusList[0]
    }
    setCards([...cards, newCard])
  }

 /*  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, []) */

 
useEffect(()=>{
  getCadrs().then((cards) => {
   setCards(cards.tasks)
   setIsLoading(false)
    })
    .catch(alert("Не удалось загрузить данные, попробуйте позже"))
}, [])

return (
    <>
    <GlobalStyle />
    <Wrapper>
      {/* <PopUser /> */}
      {/* <PopNewCard /> */}
      {/* <PopBrowse /> */}
      <Header onCardAdd={onCardAdd}/>
      
      {isLoading ? <p>Данные загружаются...</p> : <Main cards={cards}/>}
		<Outlet/>
    </Wrapper>
    </>
  )
}

export default MainPage
