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
<<<<<<< HEAD
=======
import { getCadrs } from '../../api'
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421

function MainPage({user}) {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

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

 /* useEffect(()=>{
  getCadrs({
    token:user.token
  }).then((cards) => {
   setCards(cards.tasks)
   setIsLoading(false)
    })
    .catch(alert("Не удалось загрузить данные, попробуйте позже"))
}, []) */
useEffect(()=>{
  const onCards = async () => {
   
    try {
    const res = await getCadrs({
      token: user.token
    })
    setCards(res.tasks)
    // console.log(res);
   setIsLoading(false)
 
  } catch (error) 
  {
  console.error(error)
  setError("Не удалось загрузить данные, попробуйте позже")
 } 
  }
  onCards()
}, [user.token])

return (
    <>
    <GlobalStyle />
    <Wrapper>
      {/* <PopUser /> */}
      {/* <PopNewCard /> */}
      {/* <PopBrowse /> */}
      <Header onCardAdd={onCardAdd}/>
<<<<<<< HEAD
      
      {isLoading ? <p>Данные загружаются...</p> : <Main cards={cards}/>}
=======
      {error && <p>{error}</p>}
      {!error && <Main cards={cards} isLoading={isLoading}/>}
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421
		<Outlet/>
    </Wrapper>
    </>
  )
}

export default MainPage
