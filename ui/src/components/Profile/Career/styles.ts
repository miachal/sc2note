import styled from 'styled-components';

export const CareerContainer = styled.div``;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Label = styled.div<{ leftAlign: number }>`
  transform: rotate(-90deg);
  position: absolute;
  font-size: 12px;
  left: ${({ leftAlign }) => leftAlign}px;
`;
