import { PokemonModel } from "../../models/PokemonModel";
import Card from "../Card/Card";
import { data } from "../../constants/constants";
import "./products.scss";


const Products = () => {
  const card = data.map((pokemon: PokemonModel, index) => (
    <Card
    {...pokemon}
    key={index}
    />
  ));
  return (
    <section className="products-wrapper">
      <h3>Products</h3>

      <section className="products-wrapper__cards">{card}</section>
    </section>
  );
};

export default Products;

