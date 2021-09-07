import { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { Transition } from "react-spring";
import ModalProvider from "./ModalProvider";

function getPortalRoot() {
  const portalRoot = document.getElementById("moda-root");

  if (!portalRoot) {
    throw new Error('No element with id "modal-root" in the DOM.');
  }

  return portalRoot;
}

export interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  openModal: () => void;
}

const Modal: FC<ModalProps> = ({ children, ...modalProps }) => {
  const { closeModal, isOpen } = modalProps;

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleBodyKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("keydown", handleBodyKeyDown);
    } else {
      document.body.removeEventListener("keydown", handleBodyKeyDown);
    }
    return () => {
      document.body.removeEventListener("keydown", handleBodyKeyDown);
    };
  }, [handleBodyKeyDown]);

  return isOpen
    ? ReactDOM.createPortal(
        <Transition
          enter={{ opacity: 1 }}
          from={{ opacity: 0 }}
          items={isOpen}
          leave={{ opacity: 0 }}
        >
          {(show) =>
            show &&
            (() => (
              <ModalProvider {...modalProps}>
                <div className={styles.modal} ref={modalRef}>
                  The modal
                </div>
                {children}
                <button onClick={() => closeModal()}>close</button>
              </ModalProvider>
            ))
          }
        </Transition>,
        getPortalRoot()
      )
    : null;
};

export default Modal;
