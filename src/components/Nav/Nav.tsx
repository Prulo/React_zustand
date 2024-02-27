import Logo from "../UI/Logo/Logo";
import Cart from "../../assets/cart.svg";
import Navigation from "./Navigation";
import "./nav.scss";
import { navigationLinks } from "../../constants/constants";
import { useCartStore } from "../../store/addtocart";

const Nav = () => {
  const {totalProducts } = useCartStore()
  return (
    <nav className="nav">
      <Logo />
      <Navigation navigationLinks={navigationLinks} />
      <picture className="nav__image-wrapper">
        <img src={Cart} alt="" /> 
        <p className="nav__image-wrapper--count">{totalProducts}</p>
      </picture>
    </nav>
  );
};

export default Nav;
