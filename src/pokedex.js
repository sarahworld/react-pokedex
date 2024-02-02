import { Container, Row, Col } from "reactstrap";
import './pokedex.css'


import Pokecard from "./pokecard";

const Pokedex = (props) => {

    return (
        
            <div className="Pokedex">
                <h2 className="Pokedex-title">Pokedex</h2>
                <div className="Pokedex-cards">
                {props.defaultProps.map(each => (
                    <Pokecard values={each} >
                    </Pokecard>
                ))}
                </div>
            </div>
           
        )
}

export default Pokedex;