import React from 'react'
import { Col, Card } from 'react-bootstrap'

const CardPoke = ({pokemon}) => {
    return (
        <>
            <Col>
                <Card  className="card">
                    <Card.Img variant="top" src={pokemon.sprites.front_default} />
                    <Card.Body className="pokemon-box">
                    <Card.Text className="pokemon-name">
                        {pokemon.name}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default CardPoke
