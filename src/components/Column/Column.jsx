import Card from "../Card/Card";
import { Cards } from "../Card/Cards.styled";
import * as S from "../Main/Main.styled";

const Column = ({title, cardList}) => {
    return (
    <S.Column>
     <div className="column__title">
        <p>{title}</p>
     </div>
       <Cards>
        {cardList.map((card) => (
            <Card key={card.id} topic={card.topic} title={card.title} date={card.date} />
         ))}
        
        </Cards>
    </S.Column>
);
}
 
export default Column;