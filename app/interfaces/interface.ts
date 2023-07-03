export interface IForm {
    size: string;
    color: string;
    quantity: number;
  }
  
export interface IInfo {
    id: string,
    img: string;
    name: string;
    price: string;
  }

export interface IProduct {
    id: string;
    name: string;
    img: string;
    price: string;
  }
  
export interface ICart extends IInfo {
    size: string;
    color: string;
    quantity: number;
}