import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ isOrange }) => (isOrange ? 'orange' : 'blue')};
`;
export const Paragraf = styled.p`
  color: green;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background-color: #fff;
  }
  &:hover ${Span} {
    color: lightblue;
  }
`;
