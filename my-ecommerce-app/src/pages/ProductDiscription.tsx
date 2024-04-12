import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Product } from 'components/organisms/ProductCard';
import { Button } from 'react-bootstrap';

// ...

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-5 d-flex justify-content-center align-items-start' style={{ minHeight: '100vh' }}>
      <Row className='container'>
        <Col md={6} className="d-flex justify-content-center align-items-start">
          <Card.Img variant="top" src={product.image} style={{ maxWidth: '60%', maxHeight: '90%', objectFit: 'contain' }} />
        </Col>
        <Col md={6}>
          <Card className="h-100 p-3" style={{border:"none", borderLeft:"1px solid grey"}}>
            <Card.Body>
              <Card.Title><h2>{product.title}</h2></Card.Title>
              <Card.Text><p>{product.description}</p></Card.Text>
              <Card.Text><h4>${product.price}</h4></Card.Text>
            <div className="d-flex flex-column justify-content-start">
            <Button variant="primary" className="my-2 py-2">Add to Cart</Button>
            <Button variant="success" className="my-2 py-2">Checkout</Button>
            </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;