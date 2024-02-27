import { useCartStore } from "../../../store/addtocart";
import "./CartItem.scss"

interface CartItemProps {
    id: string;
    name: string;
    amount: number;
    desc: string;
    price: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, amount, desc, price}) => {
const {decreaseCartItem, increaseCartItem, removeFromCart } = useCartStore()


  return (
    <ul key={id}>
    <li>{name}</li>
    <li>{desc}</li>
    <li>{price * amount} $</li>
    <li>{id}</li>
    <li><button onClick={() => decreaseCartItem(id)}>-</button>{amount}<button onClick={() => increaseCartItem(id)}>+</button></li>
    <li><button onClick={() => removeFromCart(id)}>delete</button></li>
    </ul>
  )
}
export default CartItem