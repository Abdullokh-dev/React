import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {useState} from "react";

interface Props {
  onClick: () => void;
}

function Like({onClick}: Props) {
  const [status, setStatus] = useState(false);

  function toggleStatus() {
    setStatus(!status);
    onClick();
  }

  if (status) return(<AiFillHeart color="ff6b81" size={40} onClick={toggleStatus}/>)
  return <AiOutlineHeart size={40} onClick={toggleStatus}/>
}

export default Like;