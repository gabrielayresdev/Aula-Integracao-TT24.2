import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  padding: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h2`
  word-wrap: break-word;
  font-size: 1.5rem;
  font-weight: 500;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  word-wrap: break-word;
  font-size: 1.125rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limita o texto a 2 linhas */
  line-clamp: 2;
  text-overflow: ellipsis;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 500;

  &::before {
    content: "R$ ";
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RatingCount = styled.span`
  font-size: 0.75rem;
  color: #ddd;
`;
