import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({children, onClose}: Props) {
  return(
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
      </div>
    </>
  )
}

export default Alert;
