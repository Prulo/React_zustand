import { data } from "../../constants/constants";
import { useCartStore } from "../../store/addtocart";
import CartItem from "./CartItem/CartItem";

const Cart = () => {

  const { cart, totalPrice } = useCartStore()

  const cartItems = cart.flatMap(item => {
    const { id, name, desc, price } = data.find(char => char.id === item.id)!

    return [{id, name, desc, price, amount: item.amount }]
    
  })
  

  return (
    <>
   <h1>Shopping Cart</h1>
   <ul> 

   {cartItems.map((c) => (
      <CartItem {...c}/>
   ))}
   
    </ul>

    <div>
      <h1>Checkout</h1>
      <span>Price: {totalPrice}$</span>
      <button>Proceed</button>
    </div>
   </>
  );
};

export default Cart;


// Vi vill ha ut: 
  // Antalet totala artiklar i "kundvagnen"
// Totalt pris för alla artiklar

  // antalet av en enskild artikel
  // totalt pris för antal i enskild artikel (ex 6 dollaros * 5 artiklar)

  


// vissa name och price i listan tjena prulle :D