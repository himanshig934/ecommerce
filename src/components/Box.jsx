import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Box({item}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='' />
      <Card.Body>
        <Card.Title>{item.firstName}</Card.Title>
        <Card.Text>
           {item.phone}
        </Card.Text>
        <Card.Text>{item.birthDate}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  )
}

