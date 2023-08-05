import { dataState } from "./store/dataSlice";
// import store from "./store";
//
// export type dataSliceState = ReturnType<typeof store.getState>;

// export interface Product {
//   id: string;
//   code: string;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   quantity: number;
//   inventoryStatus: string;
//   rating: number;
// }

export interface Bill {
  id: number;
  day: number;
  name: string;
  description: string;
  totalPrice: number;
  installments: number;
  installmentPrice: number;
  status: string;
  rating: number;
}
