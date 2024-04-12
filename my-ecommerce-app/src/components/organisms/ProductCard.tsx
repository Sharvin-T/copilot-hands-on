import React from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const history = useHistory();

  const handleClick = () => {
    history.push(`/product/${product.id}`);
  };
  return (
    <Card onClick={handleClick} className="h-100 shadow-sm bg-light cursor-pointer">
      <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.description}
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;