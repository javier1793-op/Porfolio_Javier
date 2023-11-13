
import ReactDOM from 'react-dom';
import '../Scss/modal.scss'
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
    return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onClose}>
              <FiX/>
            </button>
            {children}
          </div>
        </div>,
         document.getElementById("portal")
      );
}

export default Modal