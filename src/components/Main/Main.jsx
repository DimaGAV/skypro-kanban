import { statusList } from "../../data";
import { Container } from "../../styled/common";
import Column from "../Column/Column";
import * as S from "../Main/Main.styled";

const Main = ({ cards, isLoading }) => { 
  return (
    <S.Main>
      <Container>
        <S.Block>
          <S.Content>
            {isLoading && <p>Данные загружаются...</p>}
            {!isLoading && 
            statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.Content>
        </S.Block>
      </Container>
    </S.Main>
  );
};

export default Main;
