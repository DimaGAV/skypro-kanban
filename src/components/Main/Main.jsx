import { statusList } from "../../data";
import Column from "../Column/Column";
import { Container } from "../../styled/common";
import * as S from "../Main/Main.styled";

const Main = ({ cards }) => {
  return (
    <S.Main>
      <Container>
        <S.Block>
          <S.Content>
            {statusList.map((status) => (
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
