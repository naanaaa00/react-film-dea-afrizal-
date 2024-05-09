import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'

import duneImage from'../assets/trending/dune.jpg'
import everythingImage from'../assets/trending/everything.jpg'
import inviniteImage from'../assets/trending/infinite.jpg'
import jokerImage from'../assets/trending/joker.jpg'
import lightYearImage from'../assets/trending/lightyear.jpg'
import morbiusImage from'../assets/trending/morbius.jpg'

const movieData = [
  {
    id: 1,
    title: 'Dune',
    image: duneImage,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 2,
    title: 'Dune',
    image: everythingImage,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 3,
    title: 'Dune',
    image: inviniteImage,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 4,
    title: 'Dune',
    image: jokerImage,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 5,
    title: 'Dune',
    image: lightYearImage,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 6,
    title: 'Dune',
    image: morbiusImage,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
]

const Trending = () => {
  return (
    <div>
    <Container>
    <br /> <br /> 
    <h1 className='text-white'>TRENDING MOVIES</h1>
        <Row>
        {movieData.map((movie) => (
        <Col key={movie.id} md={4} className='movieWrapper' id='trending'>
          <Card className="movieImg text-light">
            <Image src={movie.image}alt="Card image" className='movieImage'/>
            <div className='bg-dark'>
              <Card.Title className='text-center'>{movie.title}</Card.Title>
              <Card.Text className='text-left'>{movie.description}</Card.Text>
              <Card.Text className='text-left'>{movie.lastUpdated}</Card.Text>
            </div>
          </Card>
        </Col>
      ))}

        </Row>
    </Container>
    </div>
  )
}

export default Trending
