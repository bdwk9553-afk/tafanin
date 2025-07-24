export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  brand?: string;
  inStock?: boolean;
  isNew?: boolean;
  featured?: boolean;
  rating?: number;
  salesCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  street: string;
  area: string;
  building?: string;
  floor?: string;
  apartment?: string;
  notes?: string;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  paymentFee: number;
  total: number;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  createdAt: Date;
  whatsappLink?: string;
}

export interface DeliveryArea {
  name: string;
  fee: number;
}