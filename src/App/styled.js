import styled from "styled-components";
import { QueryClientProvider } from 'react-query';

export const Container = styled(QueryClientProvider)`
  width: 100%;
  height: 100%;
  padding: 1em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #c3bfb5; // #3e4346 DARK MODE
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 91%;
  text-align: center;
  overflow-y: hidden;
`;

export const Title = styled.h1`
  width: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  font-size: 6.4em;
  font-weight: 900;
  text-align: center;
  letter-spacing: -6px;
  color: #613898;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 3.7em;
  }

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 425px) {
    font-size: 1.5em;
    height: 6%;
  }
`;

export const AltColor = styled.span`
  color: black;

`