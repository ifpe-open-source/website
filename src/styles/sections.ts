import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.78rem;
  font-weight: bold;

  color: ${({ theme }) => theme.text};

  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;

  color: ${({ theme }) => theme.text};

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
