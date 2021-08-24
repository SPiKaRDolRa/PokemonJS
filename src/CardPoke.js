import React from 'react'
import { Card } from 'react-bootstrap'

const CardPoke = ({pokemon}) => {
    return (
        <>
        <Card  className="card">
            <Card.Img variant="top" src={pokemon.sprites.front_default} />
            <Card.Body className="pokemon-box">
            <Card.Text className="pokemon-name">
                {pokemon.name}
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default CardPoke
