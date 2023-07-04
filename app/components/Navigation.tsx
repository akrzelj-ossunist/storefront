"use client";
import Image from "next/image";
import Ham from "../assets/ham.svg";
import Cart from "../assets/cart.svg";
import logo from "../assets/Logotype.png";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import SideNav from "./SideNav";

const Navigation: React.FC = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex relative justify-center border-b-[1px]">
      <Link href="/">
        <Image src={logo} alt="logo" className="my-2 mt-4" />
      </Link>
      <Ham className="absolute top-3 left-4 cursor-pointer" />
      <Cart
        className="absolute top-2 right-6 cursor-pointer"
        onClick={() => setModal(true)}
      />
      {modal && <Modal setModal={setModal} />}
      <SideNav
        setModal={setModal}
        className={`${
          modal ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
      />
    </div>
  );
};

export default Navigation;
