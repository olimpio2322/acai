export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
}

export interface Topping {
    id: string;
    name: string;
    type: 'free' | 'paid';
    price?: number;
    image?: string;
    available: boolean;
}

export interface OrderItem {
    size: Product;
    freeToppings: Topping[];
    paidToppings: Topping[];
    totalItemPrice: number;
}

export interface Neighborhood {
    id: string;
    name: string;
    fee: number;
}

export interface Order {
    id: string;
    customerName: string;
    status: 'Novo' | 'Preparando' | 'Saiu para Entrega' | 'Entregue';
    items: string; // Simplified for the list view
    total: number;
    image: string;
    date: string;
    itemsCount: number;
}
