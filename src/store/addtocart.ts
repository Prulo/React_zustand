import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProps {
  id: string;
  amount: number;
  price: number;
}

interface StoreState {
  cart: CartProps[];
  totalProducts: number;
  totalPrice: number;
  addToCart: (id: string, amount: number, price: number) => void;
  increaseCartItem: (id: string) => void;
  decreaseCartItem:(id: string) => void;
  removeFromCart: (id: string) => void;

}

export const useCartStore = create<StoreState>()(
  persist(
    (set) => ({
    cart: [],
    totalProducts: 0,
    totalPrice: 0,

    addToCart: (id, amount, price) =>
     set(state => {
      const existingIndex = state.cart.findIndex(item => item.id === id)
      const newTotalPrice: number = state.totalPrice + (price * amount)

      
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].amount += amount;
        updatedCart[existingIndex].price += price * amount

        return { 
          cart: updatedCart, 
          totalProducts: state.totalProducts + amount,
          totalPrice: newTotalPrice,
         };
      } else {
        return { 
          cart: [...state.cart, { id, amount, price }],
          totalProducts: state.totalProducts + amount,
          totalPrice: newTotalPrice,
        };
      }
  }),
  
  increaseCartItem: (id) => set(state => {
    const itemIndex = state.cart.findIndex(item => item.id === id)
    const newTotalProducts = state.totalProducts + 1
    const updatedCart = [...state.cart];
    updatedCart[itemIndex].amount++
    const newTotalPrice = state.totalPrice + updatedCart[itemIndex].price

    return {
      cart: updatedCart,
      totalProducts: newTotalProducts,
      totalPrice: newTotalPrice 
    }
  }),

  decreaseCartItem: (id) => set(state => {
    const itemIndex = state.cart.findIndex(item => item.id === id)
    const newTotalProducts = state.totalProducts - 1

    const updatedCart = [...state.cart];
    updatedCart[itemIndex].amount--
    const newTotalPrice = state.totalPrice - updatedCart[itemIndex].price

    return {
      cart: updatedCart,
      totalProducts: newTotalProducts,
      totalPrice: newTotalPrice
    }
  }),

  removeFromCart: (id) => set(state => {
    const itemIndex = state.cart.findIndex(item => item.id === id)
    const newTotalProducts = state.totalProducts - state.cart[itemIndex].amount
    const newTotalPrice = state.totalPrice - state.cart[itemIndex].amount * state.cart[itemIndex].price
    const updatedCart = state.cart.filter(item => item.id !== id)
    

    return {
      cart: updatedCart,
      totalProducts: newTotalProducts,
      totalPrice: newTotalPrice
    }
  }), 
}),
{
    name: 'cartStorage',
    storage: createJSONStorage(() => sessionStorage)
    }
  )
);


const loadInitialState = () => {
  const storedState = sessionStorage.getItem('cartStorage');
  if (storedState) {
    const { cart, totalProducts, totalPrice } = JSON.parse(storedState);
    useCartStore.setState({ cart, totalProducts, totalPrice });
  }
}

loadInitialState();
// add to cart skicka state från product till cart