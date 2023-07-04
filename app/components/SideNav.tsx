"use client";
import { useState } from "react";
import { ICart } from "../interfaces/interface";
import Image from "next/image";
import Exit from "../assets/exit.svg";

const SideNav: React.FC<{
  className: string;
  setModal: (val: boolean) => void;
}> = ({ className: classValues, setModal }) => {
  const [cart, setCart] = useState<Array<ICart>>(() => {
    if (typeof window !== "undefined")
      return JSON.parse(localStorage.getItem("cart")!) || [];
    return [];
  });
  return (
    <div
      className={`sm:w-[415px] rounded-l-2xl py-8 bg-white h-[100vh] fixed z-50 right-0 top-0 overflow-y-auto ${classValues} flex flex-col w-full`}
    >
      <Exit
        className="absolute top-4 right-4"
        onClick={() => setModal(false)}
      />
      {cart.map((article, index) => {
        return (
          <div key={index} className="flex justify-evenly my-4 mx-0">
            <Image
              src={article.img}
              alt="product"
              width={176}
              height={185}
              className="w-[175px] h-[200px] rounded-md"
            />
            <div className="flex flex-col justify-evenly">
              <p className="text-[#111827] text-[20px] font-semibold">
                {article.name}
              </p>
              <p className="text-[#111827] text-[14px]">Size: {article.size}</p>
              <p className="text-[#111827] text-[14px]">
                {article.price} X {article.quantity}
              </p>
              <button
                className="bg-red-700 text-white py-1 rounded-md"
                onClick={() => {
                  cart.splice(index, 1);
                  setCart([...cart]);
                  localStorage.setItem("cart", JSON.stringify(cart));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
