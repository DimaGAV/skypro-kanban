import { statusList } from "../../data";
import Column from "../Column/Column";
import { Container } from "../Container/Container.styled";


const Main = ({cards}) => {
    return (
    <main className="main">
    <Container>
        <div className="main__block">
            <div className="main__content">
             {statusList.map((status) => (
              <Column
               key={status}
               title={status}
               cardList={cards.filter((card) => card.status === status)}
              />
             ))}
            </div>
        </div>
    </Container>
</main> );
}
 
export default Main;