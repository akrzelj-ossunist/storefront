"use client";
import { useEffect, useRef, useState } from "react";

const Modal: React.FC<{
  children?: JSX.Element;
  setModal: (val: boolean) => void;
}> = ({ children, setModal }) => {
  useEffect(() => {
    document.addEventListener("click", clickOutside);
  }, []);
  const ref = useRef<HTMLDivElement | null>(null);
  const clickOutside = (el: any) => {
    if (ref.current?.contains(el.target)) {
      setModal(false);
    }
  };
  return (
    <div
      className="flex w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] fixed z-10"
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Modal;
