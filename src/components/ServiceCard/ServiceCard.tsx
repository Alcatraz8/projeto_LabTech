import { Service } from "../Services/data/data";

import product from '../../assets/images/background.png';

import "./styles.css";

function ServiceCard ({item}:{item: Service}) {
  const { descricao, titulo } = item;

  return  (
    <>
      <div className="cardContainer">
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
        <img className="cardImage" src={product} />
      </div>
    </>
  )
}

export default ServiceCard;