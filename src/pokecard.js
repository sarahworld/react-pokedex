import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './pokecard.css'


const Pokecard = (props) => {
    return (
        
        <Card className='Pokecard'
        style={{
          width: '10rem', 
          border: '2px solid black',
          margin: '7px'
        }}
      >
        <CardBody>
          <CardTitle tag="h2" className='Pokecard-title'>
            {props.values.name}
          </CardTitle>
        
        </CardBody>
        <img
          alt="Card cap"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.values.id}.png`}
          width="100%"
        />
        <CardBody className='Pokecard-data'>
        Type:{props.values.type}
        EXP:{props.values.base_experience}
        </CardBody>
      </Card>
    )
}


export default Pokecard;