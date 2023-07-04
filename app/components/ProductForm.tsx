"use client";
import { useState } from "react";
import { IForm, IInfo } from "../interfaces/interface";

const ProductForm: React.FC<{
  sizes: any;
  info: IInfo;
  getCart: (val: any) => void;
  cart: any;
}> = ({ sizes, info, getCart, cart }) => {
  const [productForm, getProductForm] = useState<IForm>({
    size: sizes[0].value,
    color: "White",
    quantity: 1,
  });
  return (
    <form onSubmit={() => getCart([...cart, { ...productForm, ...info }])}>
      <select
        className="md:w-[440px] h-[40px] border-[1px] border-[#E5E7EB] flex justify-center items-center my-2 p-2 w-[350px]"
        onChange={(e) =>
          getProductForm({ ...productForm, size: e.target.value })
        }
      >
        {sizes.map((size: string, index: number) => (
          <option key={index}>{size.value}</option>
        ))}
      </select>
      <select
        className="md:w-[440px] h-[40px] border-[1px] border-[#E5E7EB] flex justify-center items-center my-2 p-2 w-[350px]"
        onChange={(e) =>
          getProductForm({ ...productForm, color: e.target.value })
        }
      >
        <option value="white">White</option>
        <option value="black">Black</option>
      </select>
      <div className="flex relative">
        <p className="md:w-[440px] h-[40px] border-[1px] border-[#E5E7EB] flex justify-center items-center my-2 w-[350px]">
          {productForm.quantity}
        </p>
        <button
          type="button"
          className="absolute left-4 top-[14px] text-xl font-bold"
          onClick={() =>
            getProductForm(
              productForm.quantity > 1
                ? { ...productForm, quantity: productForm.quantity - 1 }
                : productForm
            )
          }
        >
          -
        </button>
        <button
          type="button"
          className="absolute right-4 top-[14px] text-xl font-bold"
          onClick={() =>
            getProductForm({
              ...productForm,
              quantity: productForm.quantity + 1,
            })
          }
        >
          +
        </button>
      </div>

      <button
        type="submit"
        className="text-white cursor-pointer md:w-[440px] bg-[#111827] py-3 my-2 w-[350px]"
      >
        Add to cart +
      </button>
    </form>
  );
};

export default ProductForm;
