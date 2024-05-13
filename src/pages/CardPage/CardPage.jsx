import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";

export default function UserPage() {
  let { id } = useParams();

  return <PopBrowse id={id}/>
}