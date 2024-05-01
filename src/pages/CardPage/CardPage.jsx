import { useParams } from "react-router-dom";

export default function CardPage() {
  let { id } = useParams();

  return <div>Страница карточки с ID: {id}</div>;
}
