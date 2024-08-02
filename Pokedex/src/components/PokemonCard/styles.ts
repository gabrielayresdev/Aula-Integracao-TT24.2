import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #000;
  border-radius: 16px;
  padding: 1rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  background: #d6ebdc;
`;

export const Code = styled.p`
  font-size: 1rem;
  color: #5a5a5a;
  font-family: sans-serif;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #000;
  font-family: sans-serif;
`;
