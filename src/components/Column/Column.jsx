import Card from "../Card/Card";
import { Cards } from "../Card/Cards.styled";
import * as S from "../Main/Main.styled";
import * as R from "../Column/Column.styled"

const Column = ({title, cardList}) => {
    return (
    <S.Column>
     <R.Title>
        <R.TitleText>{title}</R.TitleText>
     </R.Title>
       <Cards>
        {cardList.map((card) => (
<<<<<<< HEAD
            <Card id={card.id} key={card.id} topic={card.topic} title={card.title} date={card.date} />
=======
            <Card key={card._id} id={card._id} topic={card.topic} title={card.title} date={card.date} />
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421
         ))}
        </Cards>
    </S.Column>
);
}
 
export default Column;