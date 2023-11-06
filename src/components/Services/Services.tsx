import { ServiceCard } from "../ServiceCard";
import { data } from "./data/data";

import "./styles.css";

function Services() {
  return(
    <>
      <div className="serviceContainer">
        { data.map(item => <ServiceCard key={item.id} item={item}/>) }
      </div>
    </>
  )
}

export default Services;