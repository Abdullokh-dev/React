import {useState} from "react";

interface Props {
  children: string,
  maxChars?: number
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpended, setExpended] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpended ? children : children.substring(0, maxChars);

  return <p>{text}...<button onClick={() => setExpended(!isExpended)}>{isExpended ? 'Less' : 'More' }</button></p>;
}

export default ExpandableText;