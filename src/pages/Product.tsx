import { useParams } from "react-router-dom";
import { data, imageString } from "../constants/constants";
import "./product.scss";
import { useState } from "react";
import { useCountStore } from "../store/count";
import { PokemonModel } from "../models/PokemonModel";
import { useCartStore } from "../store/addtocart";

//Efter att ett villkor är mött, ska vi rendera produktinformationen.

//Om id´t i parametern, matchar id´t i data objektet.
//Rendera JSX (Visa Rätt UI för användaren)
const Product = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const { count, decrement, increment, resetCount } = useCountStore();
  const { addToCart } = useCartStore();

  const pokemon = data.find((pokemon) => pokemon.id === id);

  const { desc, name, buttonText, price } = pokemon as PokemonModel;

  const addPokemonToCart = () => {
    addToCart(id!, count, price);
    resetCount();
  }

  const handleClick = () => {
    setShow((prevValue) => !prevValue);
  };

  return (
    <section className="product-wrapper">
      <picture>
        <img src={imageString} alt="" />
      </picture>
      <article className="product-wrapper__product-info">
        {show && (
          <>
            <h4>{name}</h4>
            <p>{desc}</p>
            <p>{price}</p>
            <div className="add-to-cart">
              <button disabled={count < 1} onClick={decrement}>
                -
              </button>
              <p>{count}</p>
              <button onClick={increment}>+</button>
              <button onClick={addPokemonToCart}>Add to cart</button> /* add to cart increment */
            </div>
          </>
        )}
        <button onClick={handleClick}>{buttonText}</button>
      </article>
    </section>
  );
};

export default Product;
