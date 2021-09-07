import { useState } from "react";

export default function useModalState() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { closeModal, isOpen, openModal };
}
