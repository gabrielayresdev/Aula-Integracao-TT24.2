import React from "react";
import { getProducts } from "../../services/api";
import { Product } from "../../components/Product";
import { Container } from "./styles";

type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
};

export const Home = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useState(() => {
    const request = async () => {
      const data = await getProducts();
      if (data?.data !== undefined) setProducts(data.data);
    };
    request();
  });
  if (products.length === 0) return null;
  return (
    <Container>
      {products.map((item) => {
        return (
          <Product
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id}
            category={item.category}
            key={item.id}
          />
        );
      })}
    </Container>
  );
};
