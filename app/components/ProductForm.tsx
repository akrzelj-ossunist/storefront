"use client";
import { useState } from "react";

interface IForm {
  size: string;
  color: string;
  quantity: number;
}

const ProductForm: React.FC<{ sizes: any }> = ({ sizes }) => {
  const [productForm, getProductForm] = useState<IForm>({
    size: sizes[0].value,
    color: "White",
    quantity: 1,
  });
  return (
    <>
      <form>
        <select
          className="w-[440px] h-[40px] border-[1px] border-[#E5E7EB] flex justify-center items-center"
          onChange={(e) =>
            getProductForm({ ...productForm, size: e.target.value })
          }
        >
          {sizes.map((size: string, index: number) => (
            <option key={index}>{size.value}</option>
          ))}
        </select>
        <select
          className="w-[440px] h-[40px] border-[1px] border-[#E5E7EB] flex justify-center items-center"
          onChange={(e) =>
            getProductForm({ ...productForm, color: e.target.value })
          }
        >
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        <div className="flex relative">
          <p className="w-[440px] h-[40px] border-[1px] border-[#E5E7EB] flex justify-center items-center">
            {productForm.quantity}
          </p>
          <button
            type="button"
            className="absolute left-4 top-[6px] text-xl font-bold"
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
            className="absolute right-4 top-[6px] text-xl font-bold"
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
          className="text-white cursor-pointer font-bold w-[200px] rounded-xl text-2xl bg-blue-500 py-3 active:bg-blue-300 shadow-lg"
        >
          Add to cart
        </button>
      </form>
    </>
  );
};

export default ProductForm;
