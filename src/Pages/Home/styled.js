import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100%;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: space-around;
  width: 100%;
  height: 85%;
  padding: 0 5em;

  @media (max-width: 425px) {
    padding: 0 1.5em;
  }
`;

export const SongBox = styled.div`
  border: 1px solid black;
  border-radius: 15px;
`;

export const SongTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
`;

export const InfinityBox = styled.div`
  border: 5px solid black;
  font-size: 1.5em;
  font-weight: thin;
  letter-spacing: normal;
  width: 100%;
  height: 47%;
  overflow-y: scroll;
`;