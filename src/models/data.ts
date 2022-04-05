export interface IItem {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    status: ItemStatuses;
    old_price?: number;
    width?: number;
    height?: number;
    length?: number;
    thickness?: number;
    volume?: number;
    weight?: number;
    layer_thickness?: number;
    application_method?: number;
    density?: number;
    color?: string;
    application_area?: string;
    type_of_work?: string;
    mark?: string;
    vendor_code?: string;
    width_units?: string;
    height_units?: string;
    length_units?: string;
    thickness_units?: string;
    volume_units?: string;
    weight_units?: string;
    layer_thickness_units?: string;
    density_units?: string;
    description: string;
    image: {
      data: {
        id: number;
        attributes: IImage;
      };
    };
    brand: {
      data: {
        id: number;
        attributes: {
          brand: string;
        };
      };
    };
    category: {
      data: {
        id: number;
        attributes: {
          category: string;
        };
      };
    };
    subcategory: {
      data: {
        id: number;
        attributes: {
          subcategory: string;
        };
      };
    };
  };
}

export enum ItemStatuses {
  IN = "в наличии",
  OUT = "нет в наличии",
  AWAITING = "ожидается поставка",
}

interface IImage {
  url: string;
}

export interface ICategory {
  id: string;
  category: string;
  image: string;
  count: number;
}

export interface IMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Order {
  title: string;
  orderSum: number;
  amount: number;
  name: string;
  phone: string;
  email: string;
  address?: string;
  status: string;
}
