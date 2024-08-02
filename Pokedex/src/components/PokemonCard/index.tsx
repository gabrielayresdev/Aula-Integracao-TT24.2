import React from "react";
import { Code, Container, Image, Title } from "./styles";

type Props = {
  name: string;
  imgUrl: string;
  number: number;
};

export const PokemonCard = (props: Props) => {
  return (
    <Container>
      <Image src={props.imgUrl} />
      <Code>{`#${props.number}`}</Code>
      <Title>{props.name}</Title>
    </Container>
  );
};
