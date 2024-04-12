import React, { useEffect, useState } from 'react';
import CarouselComponent from "components/organisms/CarouselComponent";
import ProductCard from 'components/organisms/ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => setFeaturedProducts(products.slice(0, 4))); // Get the first 4 products
  }, []);

  return (
    <>
      <div className="container mt-3">
        <CarouselComponent />
        <h2 className="mt-4">Featured Products</h2>
        <Row xs={1} md={2} lg={4}>
          {featuredProducts.map(product => (
            <Col key={product.id} className="mb-4">
              <ProductCard product={product}/>
            </Col>
          ))}
        </Row>
      </div>
      <footer className="p-6 bg-blue-600 text-white">
        <p>© 2022 E-Commerce Site</p>
      </footer>
    </>
  );
};

export default Home;