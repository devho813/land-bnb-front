import { useEffect, useRef } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { css } from "@emotion/react";

interface IProps {
  children: React.ReactNode;
}

function useModal() {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
  }

  const ModalPortal = ({ children }: IProps) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []);
  
    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <div css={modalPortalContainer}>
          <div css={modalBackground} role="presentation" onClick={closeModal} />
          {children}
        </div>,
        ref.current
      );
    }
  
    return null;
  }

  return {
    openModal,
    closeModal,
    ModalPortal
  }
}

export default useModal;

export const modalPortalContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

export const modalBackground = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;