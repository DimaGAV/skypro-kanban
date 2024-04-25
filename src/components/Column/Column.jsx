import Card from "../Card/Card";
import { Cards } from "../Card/Cards.styled";

const Column = ({title, cardList}) => {
    return ( <div className="main__column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <Cards>
        {cardList.map((card) => (
            <Card key={card.id} topic={card.topic} title={card.title} date={card.date} />
        ))}
        
    </Cards>
</div>
);
}
 
export default Column;