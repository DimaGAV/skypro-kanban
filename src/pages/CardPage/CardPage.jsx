import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";

export default function CardPage() {
  let { id } = useParams();

<<<<<<< HEAD
<<<<<<< HEAD
  return <div>Страница карточки с ID: {id}</div>;
}
=======
  return <PopBrowse id={id}/>
}
>>>>>>> 03746107f18ac44098b8ea4d65260f527857be59
=======
  return <PopBrowse id={id}/>
}
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421
