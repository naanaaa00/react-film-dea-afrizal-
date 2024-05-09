import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'

import antmanImg from '../assets/superhero/antman.jpg'
import avengerImg from '../assets/superhero/avenger.jpg'
import batmanImg from '../assets/superhero/batman.jpg'
import robinhoodImg from '../assets/superhero/robinhood.jpg'
import spidermanImg from '../assets/superhero/spiderman-cover.jpg'
import supermanImg from '../assets/superhero/superman.jpg'

const superheroData = [
  {
    id: 1,
    title: 'Dune',
    image: antmanImg,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 2,
    title: 'Dune',
    image: avengerImg,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 3,
    title: 'Dune',
    image: batmanImg,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 4,
    title: 'Dune',
    image: robinhoodImg,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 5,
    title: 'Dune',
    image: spidermanImg,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
  {
    id: 6,
    title: 'Dune',
    image: supermanImg,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    lastUpdated: 'Last updated 3 mins ago',
  },
]

const Superhero = () => {
  return (
    <div>
       <Container>
    <br /> <br /> 
    <h1 className='text-white'>SUPERHERO</h1>
        <Row>
        {superheroData.map((superhero) => (
        <Col key={superhero.id} md={4} className='superheroWrapper' id='superhero'>
          <Card className="superheroImg text-light">
            <Image src={superhero.image}alt="Card image" className='superheroImage'/>
            <div className='bg-dark'>
              <Card.Title className='text-center'>{superhero.title}</Card.Title>
              <Card.Text className='text-left'>{superhero.description}</Card.Text>
              <Card.Text className='text-left'>{superhero.lastUpdated}</Card.Text>
            </div>
          </Card>
        </Col>
      ))}

        </Row>
    </Container>
    </div>
  )
}

export default Superhero
