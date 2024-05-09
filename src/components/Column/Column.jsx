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
            <Card key={card._id} id={card._id} topic={card.topic} title={card.title} date={card.date} />
         ))}
        </Cards>
    </S.Column>
);
}
 
export default Column;