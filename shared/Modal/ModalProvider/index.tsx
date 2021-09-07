import React, { createContext, FC, useContext } from "react";
import { ModalProps } from "..";

export const ModalContext = createContext<ModalProps | undefined>(undefined);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("No ModalContext found.");
  }

  return context;
}

const ModalProvider: FC<ModalProps> = ({ children, ...modalProps }) => {
  return (
    <ModalContext.Provider value={modalProps}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
