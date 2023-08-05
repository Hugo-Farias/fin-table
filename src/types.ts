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
