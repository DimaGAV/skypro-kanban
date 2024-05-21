import { statusList } from "../../data";
import { useTasks } from "../../hooks/useTasks";
import { Container } from "../../styled/common";
import Column from "../Column/Column";
import * as S from "../Main/Main.styled";

const Main = ({ isLoading }) => {
  const { tasks } = useTasks();

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
                  cardList={tasks.filter((card) => card.status === status)}
                />
              ))}
          </S.Content>
        </S.Block>
      </Container>
    </S.Main>
  );
};

export default Main;
