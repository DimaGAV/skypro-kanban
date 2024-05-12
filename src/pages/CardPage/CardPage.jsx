import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";

export default function CardPage() {
  let { id } = useParams();

<<<<<<< HEAD
  return <div>Страница карточки с ID: {id}</div>;
}
=======
  return <PopBrowse id={id}/>
}
>>>>>>> 03746107f18ac44098b8ea4d65260f527857be59
