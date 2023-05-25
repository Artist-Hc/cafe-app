import { useState } from 'react';
import Card from 'react-bootstrap/Card';




function CardMenu({title, category, price, img, desc}) {
    const [showImage, setShowImage] = useState(true)
  const ShowwImage = () => setShowImage(!showImage)
  return (
    <Card style={{ width: '16.5rem', height: '25rem' }} className='rounded-2 m-auto player-card' onClick={ShowwImage}>
    <Card.Title>{title}</Card.Title>
    {showImage ?  (<Card.Img variant="top" className='player-logo' src={img} />) :
    ( <Card.Body className='desc'>
        <Card.Text >
          {desc}
        </Card.Text>
        </Card.Body>)
    }
     
      <Card.Body>
        <Card.Text>
         Price: {price} $
        </Card.Text>
      </Card.Body>
     
    </Card>
  );
}

export default CardMenu;