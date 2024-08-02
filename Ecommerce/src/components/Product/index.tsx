import React from "react";
import { Product as ProductType } from "../../pages/Home";
import {
  Container,
  Content,
  Description,
  Image,
  ImageContainer,
  Name,
  Price,
  RatingContainer,
  RatingCount,
} from "./style";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

export const Product = ({
  title,
  description,
  image,
  price,
  rating,
  id,
}: ProductType) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`produto/${id}`)}>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Content>
        <Name>{title}</Name>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <RatingContainer>
          <Rating name="disabled" value={rating.rate} disabled />
          <RatingCount>{rating.count}</RatingCount>
        </RatingContainer>
      </Content>
    </Container>
  );
};
