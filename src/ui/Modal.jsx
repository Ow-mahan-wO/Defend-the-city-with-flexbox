import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="flex relative rounded-t-3xl h-[21rem] text-white w-[45%]">
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
