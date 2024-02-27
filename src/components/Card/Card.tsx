import { useNavigate } from "react-router-dom";
import "./card.scss";
import { PokemonModel } from "../../models/PokemonModel";


const Card: React.FC<PokemonModel> = ({ id, name, desc, buttonText, price }) => {
  const navigate = useNavigate();

  return (
    <article key={id} className="card">
      <h4>{name}</h4>
      <p>{desc}</p>
      <p>{`${price} $`}</p>
      <button onClick={() => navigate(`product/${id}`)}>{buttonText}</button>
    </article>
  );
};

export default Card;
