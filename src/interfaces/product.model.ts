export interface IBySold {
  _id: string;
  model: string;
  brand: {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
  frets: number;
  woodtype: string;
  description: string;
  price: number;
  available: number;
  itemSold: number;
  shipping: boolean;
  images: string[];
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}
