import React, { useEffect, useState } from 'react'
import CardPoke from './CardPoke';
import { getAllPokemon, getPokemon } from './FetchPoke';
import { Col, Row, Card } from 'react-bootstrap';

const Pokemon = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=104'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            console.log(response);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, []);

    const loadingPokemon = async (data) => {
        let pokemonData = await Promise.all(data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon)
          return pokemonRecord
        }))
        setPokemonData(pokemonData);
      }

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                <p className="titleform">Fetch Pokemon API</p>
                {loading? 
                    <Row xs={2} md={4} xl={6} className="g-4 m-1">
                    {Array.from({ length: 18 }).map((_, idx) => (
                      <Col>
                        <Card className="card">
                          <Card.Img variant="top" src="" />
                          <Card.Body>
                            <Card.Title id="loading-title" className="loading"></Card.Title>
                            <Card.Text id="loading-text" className="loading"></Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                : (
                    <>
                    <Row xs={2} md={4} xl={6} className="g-4 m-1">
                    {pokemonData.map((pokemon, info) =>{
                        return (
                            <Col>
                                <CardPoke key={info} pokemon={pokemon}/>
                            </Col>
                        );
                    })}
                    </Row>
                    </>
                )}
                </div>
            </div>
        </div>
    )
}

export default Pokemon
