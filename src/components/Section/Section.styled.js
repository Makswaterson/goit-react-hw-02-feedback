import styled from 'styled-components';

export const SectionTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
`;

export const SectionFB = styled.section`
  display: block;
  margin: 0 auto;
  padding: 40px 80px;
  width: 400px;
  background: linear-gradient(to right, #0066cc, #ffcc00);
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;
