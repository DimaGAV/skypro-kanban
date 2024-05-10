import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";

export default function UserPage() {
  let { _id } = useParams();

  return <PopBrowse id={_id}/>
}